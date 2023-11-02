import Image from "next/image";
import Container from "./components/Container";
import HomePage from "./components/homepage/HomePage";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <Container>
      <div className="lg:max-w-[728px]">
        <Toaster />
        <HomePage />
      </div>
    </Container>
  );
}
