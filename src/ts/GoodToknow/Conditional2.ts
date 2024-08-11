type ApiResponse<T> =
  | {
      type: "success";
      data: T;
      timeStamp: Date;
    }
  | {
      type: "error";
      message: string;
      timeStamp: Date;
    };

let res1: ApiResponse<number> = {
  type: "success",
  data: 111,
  timeStamp: new Date(),
};

let res2: ApiResponse<number> = {
  type: "error",
  message: "This is Error Message",
  timeStamp: new Date(),
};
