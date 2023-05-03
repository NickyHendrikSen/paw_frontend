import { PureComponent, ReactNode, useCallback, useState } from "react";

type ErrorType = {
  message: string,
  data: any
}

export const useAsync = <T, I, E = ErrorType>(
    asyncFunction: (params: I) => Promise<T>,
  ) => {
    const [status, setStatus] = useState<
      "idle" | "pending" | "success" | "error"
    >("idle");
    const [value, setValue] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);
    
    const execute = useCallback((params: I) => {
      setStatus("pending");
      setValue(null);
      setError(null);
      return asyncFunction(params)
        .then((response: any) => {
          if(!response){
            setStatus("error");
          }
          else {
            setValue(response);
            setStatus("success");
          }
        })
        .catch((error: any) => {
          setError(error?.response?.data);
          setStatus("error");
        });
    }, [asyncFunction]);
    
    return { execute, status, value, error };
  };

export type UseAsyncClassProps<T,E> = {
  asyncFunction: () => Promise<T>,
  immediate?: boolean,
  children: (params: UseAsyncClassState<T, E> & {
      execute: () => Promise<void>;
  }) => ReactNode
}

export type UseAsyncClassState<T, E> = {
  status: "idle" | "pending" | "success" | "error",
  value: null | T,
  error: null | E,
}

export class UseAsyncClass<T, E> extends PureComponent<UseAsyncClassProps<T, E>, UseAsyncClassState<T, E>> {
  state: UseAsyncClassState<T, E> = {
    status: "idle",
    value: null,
    error: null
  }

  componentDidMount () {
    if ( this.props.immediate ) {
      this.execute();
    }
  }
  
  execute = async () => {
    this.setState({
      status: "pending",
      value: null, 
      error: null
    });

    try {
      const asyncResult = await this.props.asyncFunction()
      this.setState({
        status: "success",
        value: asyncResult,
        error: null
      })
    } catch (err) {
      this.setState({
        status: "error",
        value: null,
        error: err as E
      })
    }
  }

  render () {
    return this.props.children({
      ...this.state,
      execute: this.execute
    })
  }
}
