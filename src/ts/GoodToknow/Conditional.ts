
type Props={
    name:string
    gender:"male"|"female"
    salary?:number
    weight?:number
}


type maleProps = {
  gender: "male";
  salary: number;
};

type femaleProps = {
  gender: "female";
  weight: number;
};

type ChildProps = {
  name: string;
} & (maleProps | femaleProps);

// male --> salary
// female --> weight

const Child = (props: ChildProps) => {
  if (props.gender === "male") {
    console.log(props.salary);
  } else if (props.gender === "female") {
    console.log(props.weight);
  }
};

export const Parent = () => {
  return Child({ name: "test", gender: "female", weight: 1 });
};
