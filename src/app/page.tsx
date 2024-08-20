import Header from "@/components/Header";
import Footer from "@/components/Header/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row gap-4 py-12">
        <div className="flex flex-col flex-1 items-center gap-4">
          <div className="flex flex-row rounded-2xl h-[300px] bg-eatuntil overflow-hidden">
            <div className="flex flex-col flex-1 items-center justify-center gap-3 px-4 py-5">
              <h2 className="text-3xl font-bold text-white">Eat Until</h2>
              <p className="text-lg font-light text-white">
                Gérez votre inventaire et ne perdez plus de nourriture.
              </p>
              <div className="rounded-3xl shadow-2xl overflow-hidden mt-auto">
                <Image
                  className="h-24 w-24"
                  src="/eu-logo.png"
                  alt="Eat Until Logo"
                  width={154}
                  height={154}
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/eu-screen-light.png"
                alt="Eat Until Screen"
                width={832}
                height={1200}
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="text-lg text-gray-500">Bientôt disponible sur</p>
            <Image
              src="/app-store-badge.png"
              alt="App Store Badge"
              width={240}
              height={80}
              className="h-10 w-auto grayscale opacity-40"
            />
            <Image
              src="/play-store-badge.png"
              alt="Google Play Badge"
              width={304}
              height={80}
              className="h-10 w-auto grayscale opacity-40"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center gap-4">
          <div className="flex flex-row rounded-2xl h-[300px] bg-bql overflow-hidden">
            <div className="flex flex-col flex-1 items-center justify-center gap-3 px-4 py-5">
              <h2 className="text-3xl font-bold text-white">
                Bicloo Quick Look
              </h2>
              <p className="text-lg font-light text-white">
                Voyez en un clin d‘oeil les vélos et places disponibles à vos
                stations préférées.
              </p>
              <div className="rounded-3xl shadow-2xl overflow-hidden mt-auto">
                <Image
                  className="h-24 w-24"
                  src="/bql-logo.png"
                  alt="Eat Until Logo"
                  width={154}
                  height={154}
                  priority
                />
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/bql-screen-light.png"
                alt="Bicloo Quick Look Screen"
                width={832}
                height={1200}
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Image
              src="/chrome-webstore-badge.png"
              alt="Chrome Web Store Badge"
              width={272}
              height={80}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
