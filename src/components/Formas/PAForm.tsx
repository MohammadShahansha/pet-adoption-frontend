import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormComfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFromsProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormComfig;

const PAForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TFromsProps) => {
  const formConfig: TFormComfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
    console.log(resolver);
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PAForm;
