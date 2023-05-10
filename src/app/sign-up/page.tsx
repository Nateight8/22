"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface formikValuesProp {
  fullname: string;
  username: string;
  password: string;
  cpass: string;
}

const Pages = () => {
  const [steps, setSteps] = useState(1);
  const handleNext = () => {
    setSteps((e) => e + 1);
  };

  const handleBack = () => {
    setSteps((e) => e - 1);
  };

  const initialValues: formikValuesProp = {
    fullname: "",
    username: "",
    password: "",
    cpass: "",
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="w-full">
            <div className="text-primary relative mx-auto flex h-[70vh] w-full max-w-screen-lg flex-col items-center justify-center px-4">
              {steps === 1 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Button className="">Sign in with Google</Button>
                    <div className=" my-4 flex w-full max-w-md items-center justify-center overflow-x-hidden">
                      <Separator />
                      <span className="bg-background py-x px-4 uppercase ">
                        {" "}
                        or{" "}
                      </span>
                      <Separator />
                    </div>
                    <Button onClick={handleNext} variant="outline">
                      Sign in with Email
                    </Button>
                  </div>
                </>
              )}

              {/* form fields */}
              {steps === 2 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Label htmlFor="email" className="uppercase">
                      FULL NAME
                    </Label>
                    <Field
                      as={Input}
                      name="fullname"
                      placeholder="eg John Doe"
                    />
                  </div>
                </>
              )}

              {steps === 3 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Label htmlFor="email" className="uppercase">
                      EMAIL
                    </Label>
                    <Field
                      as={Input}
                      name="email"
                      placeholder="YOUR EMAIL ADDRESS"
                    />
                  </div>
                </>
              )}

              {steps === 4 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Label htmlFor="email" className="uppercase">
                      USER NAME
                    </Label>
                    <Field
                      as={Input}
                      name="username"
                      placeholder="eg @bigMan"
                    />
                  </div>
                </>
              )}

              {steps === 5 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Label htmlFor="email" className="uppercase">
                      PASSWORD
                    </Label>
                    <Field
                      as={Input}
                      name="password"
                      placeholder="enter a password"
                    />
                  </div>
                </>
              )}

              {steps === 6 && (
                <>
                  <div className="grid w-full max-w-md items-center gap-2">
                    <Label htmlFor="email" className="uppercase">
                      Confirm password
                    </Label>
                    <Field
                      as={Input}
                      name="cpass"
                      placeholder="confirm your password"
                    />
                  </div>
                </>
              )}
              <div className="flex w-full max-w-md items-center justify-end">
                {steps === 7 && (
                  <Button
                    variant="secondary"
                    className="text-background w-full"
                    type="submit"
                  >
                    CREATE YOUR ACCOUNT
                  </Button>
                )}
                {steps < 7 && (
                  <Button
                    variant="ghost"
                    className="p-0 uppercase"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
            <div className="absolute left-4 top-4 text-slate-200">
              {steps === 1 ? (
                <Link className={buttonVariants({ variant: "ghost" })} href="/">
                  CLOSE
                </Link>
              ) : (
                <Button
                  disabled={steps === 1}
                  variant="ghost"
                  onClick={handleBack}
                >
                  BACK
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Pages;
