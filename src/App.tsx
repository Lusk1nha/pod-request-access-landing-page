import { Logo } from "./shared/assets/desktop/Logo.tsx";
import { Spotify } from "./shared/assets/desktop/Spotify.tsx";
import { ApplePodcasts } from "./shared/assets/desktop/ApplePodcasts.tsx";
import { GooglePodcasts } from "./shared/assets/desktop/GooglePodcasts.tsx";
import { PocketCasts } from "./shared/assets/desktop/PocketCasts.tsx";
import { Dots } from "./shared/assets/desktop/Dots.tsx";

import { useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const PodRequestValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type PodRequestSchema = z.infer<typeof PodRequestValidationSchema>;

function App() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<PodRequestSchema>({
    mode: "all",
    resolver: zodResolver(PodRequestValidationSchema),
  });

  const email = watch("email");

  function onSubmit(data: PodRequestSchema) {
    console.log("submitted", data);
  }

  return (
    <div className="bg-primary w-full h-screen md:px-10 lg:px-[10%] lg:py-[130px] flex flex-col relative overflow-hidden">
      <div className="w-full flex flex-col items-center md:items-start">
        <header className="flex items-center justify-center md:justify-start pt-[62px] lg:pt-0 pb-[57px] md:pb-[152px] lg:pb-[103px] z-50">
          <Logo />
        </header>

        <main className="w-full max-w-[560px] md:max-w-[635px] lg:max-w-[723px] h-full md:bg-primary flex flex-col items-center md:items-start justify-center gap-10 md:gap-[30px] lg:gap-6 md:py-[93px] px-6 md:px-0 z-50">
          <section className="w-full text-center md:text-left font-thin text-[26px] md:text-[48px] lg:text-[52px] leading-[38px] md:leading-[56px] lg:leading-[62px] uppercase">
            <h1 className="text-secondary">Publish your podcasts</h1>
            <h2 className="text-white">everywhere.</h2>
          </section>

          <p className="md:max-w-[427px] lg:max-w-[445px] text-[15px] md:text-lg text-center md:text-left text-paragraph font-thin leading-[25px]">
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>

          <div className="w-full flex flex-col gap-12 md:flex-col-reverse md:items-start md:gap-16">
            <div className="flex items-center justify-center gap-6 flex-wrap fill-icon">
              <Spotify />
              <ApplePodcasts />
              <GooglePodcasts />
              <PocketCasts />
            </div>

            <form
              className="w-full md:max-w-[427px] flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset className="w-full flex flex-col gap-2">
                <div className="w-full h-[46px] md:h-[56px]  flex items-center justify-between bg-emailInput rounded-[28px] p-[5px]">
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="text"
                    className="bg-transparent text-sm text-white font-bold leading-7 rounded-[28px] px-8 py-[9px] outline-none"
                    placeholder="Email address"
                  />

                  <button
                    name="mobile-button"
                    type="submit"
                    className="h-full items-center justify-center bg-secondary hover:bg-buttonHover rounded-[28px] text-primary font-bold text-[15px] px-[27px] py-[9px] outline-none border-none transition hidden md:flex"
                  >
                    Request Access
                  </button>
                </div>

                {!isValid && email?.length > 0 ? (
                  <p className="text-error text-xs font-bold px-8">
                    Oops! Please check your email
                  </p>
                ) : null}
              </fieldset>

              <button
                name="mobile-button"
                type="submit"
                className="w-full flex items-center justify-center bg-secondary hover:bg-buttonHover rounded-[28px] text-primary font-bold text-[15px] px-8 py-[9px] outline md:hidden transition"
              >
                Request Access
              </button>
            </form>
          </div>
        </main>
      </div>

      <div className="bg-hostMobile md:bg-hostTablet lg:bg-hostDesktop bg-cover w-full md:w-[60%] h-full md:h-[85%] lg:h-[65%] bg-no-repeat absolute top-0 bottom-0 lg:top-40 right-0 z-10" />
      <div className="bg-mobileSpirit bg-cover w-full h-full bg-no-repeat absolute top-0 bottom-0 right-0 z-20 md:hidden" />

      <div className="hidden md:flex absolute bottom-0 lg:right-0 lg:bottom-[125px] z-50">
        <Dots />
      </div>
    </div>
  );
}

export default App;
