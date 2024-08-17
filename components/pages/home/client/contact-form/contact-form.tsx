'use client';
import { useState } from 'react';

import { FormField } from '@/components/shared/client/forms/form-components';
import { FormGroup } from '@/components/shared/client/forms/form-components';
import { FormNotificacion } from '@/components/shared/client/forms/form-components';
import { FadeIn } from '@/components/shared/client/framer-motion/fade-in';

import newEmailAction from '@/lib/actions/send-email-action';

import { Formik, FormikHelpers } from 'formik';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';
import 'yup-phone-lite';

export interface ContactFormValues {
  email: string;
  lastname: string;
  message: string;
  name: string;
  phone: string;
  subject: string;
}

interface ContactFormState {
  error: string;
  isNotificationOpen: boolean;
  success: boolean;
}

export default function ContactForm() {
  const [state, setstate] = useState<ContactFormState>({
    error: '',
    isNotificationOpen: false,
    success: false,
  });

  const contactFormSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico no es válido').required('Este campo es obligatorio'),
    lastname: Yup.string().required('Este campo es obligatorio'),
    message: Yup.string().required('Este campo es obligatorio'),
    name: Yup.string().required('Este campo es obligatorio'),
    phone: Yup.string().phone(['US', 'HN'], 'El formato del número de teléfono es incorrecto').required('Este campo es obligatorio'),
    subject: Yup.string().required('Este campo es obligatorio'),
  });

  const initialFormValues: ContactFormValues = {
    email: '',
    lastname: '',
    message: '',
    name: '',
    phone: '',
    subject: '',
  };

  const handleSubmit = async (values: ContactFormValues, formikHelpers: FormikHelpers<ContactFormValues>) => {
    const data = {
      ...values,
      date: new Date(),
      name: values.name + ' ' + values.lastname,
    };

    try {
      const response = await newEmailAction(values);

      if (response.ok) {
        setstate({
          ...state,
          isNotificationOpen: true,
          success: true,
        });
        formikHelpers.resetForm();
      } else {
        setstate({
          ...state,
          error: 'Ha ocurrido un error y el servicio de contacto no esta disponible.',
          success: false,
        });
      }
    } catch (error) {
      setstate({ ...state, error: 'Ha ocurrido un error y el contacto de sugerencias no esta disponible.' });
    } finally {
      formikHelpers.setSubmitting(false);
      setTimeout(() => {
        setstate({ ...state, error: '', isNotificationOpen: false });
      }, 2000);
    }
  };

  return (
    <>
      <FormNotificacion isOpen={state.isNotificationOpen} />
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, formikHelpers) => {
          handleSubmit(values, formikHelpers);
        }}
        validationSchema={contactFormSchema}
      >
        {(formik) => (
          <FadeIn as="div" className="w-full xl:w-1/2">
            <form
              className="flex w-full flex-wrap justify-center gap-y-3 border border-typography-muted bg-primary-main px-7 py-7 shadow-2xl"
              onSubmit={formik.handleSubmit}
            >
              <h2 className="mb-5 w-full px-5 text-center text-lg font-bold leading-8 text-typography-muted underline decoration-third-main underline-offset-4 lg:text-xl">
                Contactanos y pregunta cualquier duda sobre nuestros Servicios
              </h2>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 sm:flex-row lg:flex-wrap lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-2/5">
                  <div className="relative flex h-fit items-center">
                    <input
                      className={twMerge(
                        'peer w-full rounded-md border border-typography-muted bg-transparent p-2 py-4 text-lg text-typography-primary shadow-sm ring-0 transition duration-200 hover:border-typography-primary hover:text-typography-primary focus:border-third-main focus:text-typography-primary focus:ring-third-main sm:text-sm',
                        formik.errors.name && formik.touched.name && 'border-red-500 text-red-500'
                      )}
                      name="name"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      required
                      type="text"
                      value={formik.values.name}
                    />
                    <label
                      className={twMerge(
                        'font-base pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 pr-1 font-medium text-typography-muted transition-all duration-300  peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                        formik.values.name.length > 0 && 'top-0 bg-primary-main text-sm',
                        formik.errors.name && formik.touched.name && 'text-red-500 peer-hover:text-typography-primary'
                      )}
                      htmlFor="name"
                    >
                      *Nombre
                    </label>
                  </div>

                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.name && formik.touched.name && 'visible')}>
                    {formik.errors.name ? formik.errors.name : 'a'}
                  </span>
                </FormField>
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-2/5">
                  <div className="relative flex h-fit items-center">
                    <input
                      className={twMerge(
                        'peer w-full rounded-md border border-typography-muted bg-transparent p-2 py-4 text-lg text-typography-primary shadow-sm ring-0 transition duration-200 hover:border-typography-primary hover:text-typography-primary focus:border-third-main focus:text-typography-primary focus:ring-third-main sm:text-sm',
                        formik.errors.lastname && formik.touched.lastname && 'border-red-500 text-red-500'
                      )}
                      name="lastname"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      required
                      type="text"
                      value={formik.values.lastname}
                    />
                    <label
                      className={twMerge(
                        'font-base pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 pr-1 font-medium text-typography-muted transition-all duration-300  peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                        formik.values.lastname.length > 0 && 'top-0 bg-primary-main text-sm',
                        formik.errors.lastname && formik.touched.lastname && 'text-red-500 peer-hover:text-typography-primary'
                      )}
                      htmlFor="lastname"
                    >
                      *Apellido
                    </label>
                  </div>

                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.lastname && formik.touched.lastname && 'visible')}>
                    {formik.errors.lastname ? formik.errors.lastname : 'a'}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 sm:flex-row lg:flex-wrap lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-2/5">
                  <div className="relative flex h-fit items-center">
                    <input
                      className={twMerge(
                        'peer w-full rounded-md border border-typography-muted bg-transparent p-2 py-4 text-lg text-typography-primary shadow-sm ring-0 transition duration-200 hover:border-typography-primary hover:text-typography-primary focus:border-third-main focus:text-custom-white-main focus:ring-primary-main sm:text-sm',
                        formik.errors.email && formik.touched.email && 'border-red-500 text-red-500'
                      )}
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      required
                      type="email"
                      value={formik.values.email}
                    />
                    <label
                      className={twMerge(
                        'font-base pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-medium text-typography-muted transition-all duration-300 peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                        formik.values.email.length > 0 && 'top-0 bg-primary-main text-sm',
                        formik.errors.email && formik.touched.email && 'text-red-500 peer-hover:text-typography-primary'
                      )}
                      htmlFor="email"
                    >
                      *Correo Electronico
                    </label>
                  </div>
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.email && formik.touched.email && 'visible')}>
                    {formik.errors.email ? formik.errors.email : 'a'}
                  </span>
                </FormField>
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-2/5">
                  <div className="relative flex h-fit items-center">
                    <input
                      className={twMerge(
                        'peer w-full rounded-md border border-typography-muted bg-transparent p-2 py-4 text-lg text-typography-primary shadow-sm ring-0 transition duration-200 hover:border-typography-primary hover:text-typography-primary focus:border-third-main focus:text-custom-white-main focus:ring-primary-main sm:text-sm',
                        formik.errors.phone && formik.touched.phone && 'border-red-500 text-red-500'
                      )}
                      name="phone"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      type="text"
                      value={formik.values.phone}
                    />
                    <label
                      className={twMerge(
                        'font-base pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-medium text-typography-muted transition-all duration-300 peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                        formik.values.phone.length > 0 && 'top-0 bg-primary-main text-sm',
                        formik.errors.phone && formik.touched.phone && 'text-red-500 peer-hover:text-typography-primary'
                      )}
                      htmlFor="phone"
                    >
                      *Telefono
                    </label>
                  </div>

                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.phone && formik.touched.phone && 'visible')}>
                    {formik.errors.phone ? formik.errors.phone : 'a'}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 lg:flex-row lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 lg:w-2/5">
                  <div className="relative flex h-fit items-center">
                    <input
                      className={twMerge(
                        'peer w-full rounded-md border border-typography-muted bg-transparent p-2 py-4 text-lg text-typography-primary shadow-sm ring-0 transition duration-200 hover:border-typography-primary focus:border-third-main focus:text-custom-white-main focus:ring-primary-main sm:text-sm',
                        formik.errors.subject && formik.touched.subject && 'border-red-500 text-red-500'
                      )}
                      name="subject"
                      onBlur={formik.handleBlur}
                      onChange={(e) => {
                        formik.handleChange(e);
                      }}
                      required
                      type="text"
                      value={formik.values.subject}
                    />
                    <label
                      className={twMerge(
                        'font-base pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-medium text-typography-muted transition-all duration-300  peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                        formik.values.subject.length > 0 && 'top-0 bg-primary-main text-sm',
                        formik.errors.subject && formik.touched.subject && 'text-red-500 peer-hover:text-typography-primary'
                      )}
                      htmlFor="title"
                    >
                      *Titulo
                    </label>
                  </div>

                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.subject && formik.touched.subject && 'visible')}>
                    {formik.errors.subject ? formik.errors.subject : 'a'}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 lg:flex-row lg:gap-y-0">
                <FormField className="relative flex w-full grow flex-col gap-y-2 lg:w-2/5">
                  <textarea
                    className={twMerge(
                      'peer h-52 w-full rounded-md border border-typography-muted bg-transparent p-2 py-3 text-typography-primary shadow-sm outline-none ring-0 transition duration-200 hover:border-typography-primary focus:border-third-main focus:text-custom-white-main focus:ring-0 focus:ring-primary-main sm:text-sm',
                      formik.errors.message && formik.touched.message && 'border-red-500 text-red-500'
                    )}
                    id="message"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    required
                    value={formik.values.message}
                  />
                  <label
                    className={twMerge(
                      'font-base pointer-events-none absolute left-4 top-6 -translate-y-1/2 font-medium text-typography-muted transition-all duration-300  peer-focus:top-0 peer-focus:bg-primary-main peer-focus:text-sm peer-focus:text-third-main',
                      formik.values.message.length > 0 && 'top-0 bg-primary-main text-sm',
                      formik.errors.message && formik.touched.message && 'text-red-500 peer-hover:text-typography-primary'
                    )}
                    htmlFor="message"
                  >
                    *Asunto
                  </label>
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.message && formik.touched.message && 'visible')}>
                    {formik.errors.message ? formik.errors.message : 'a'}
                  </span>
                </FormField>
              </FormGroup>
              <div className="flex w-full justify-center">
                <button
                  className={twMerge(
                    'text-secondary-darker w-full rounded-md bg-third-main px-3 py-2 text-sm font-bold opacity-60 transition-all duration-300 enabled:cursor-pointer disabled:cursor-not-allowed lg:w-[100%]',
                    formik.dirty && formik.isValid && !formik.isSubmitting && 'opacity-100'
                  )}
                  disabled={formik.dirty === false || formik.isValid === false || formik.isSubmitting}
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              {state.error && <span className="text-red-500">{state.error}</span>}
            </form>
          </FadeIn>
        )}
      </Formik>
    </>
  );
}
