import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Instagram from "../components/Instagram";
import { SliderData } from "@/components/SliderData";
import DatePicker from "@/components/atoms/form/fields/date-form-field";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Ankiety"
        message="Witamy w aplikacji do tworzenia anonimowych ankiet internetowych do badań oraz wypełniania ankiet bez konieczności zakładania konta!"
      />
      <Slider slides={SliderData} />
      <DatePicker label="2" name="3" />
      <Instagram />
    </div>
  );
}
