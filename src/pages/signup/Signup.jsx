import { usePlayerForm } from "./usePlayerForm";
import { Wizard } from "react-use-wizard";
import FirstPage from "../../components/signup/firstPage";
import SecondPage from "../../components/signup/secondPage";
import ThirdPage from "../../components/signup/thirdPage";
import FourPage from "../../components/signup/fourPage";
import FivePage from "../../components/signup/fivePage";
import playerService from "../../services/players.service";

export default function Signup() {
  const form = usePlayerForm();

  const handleSubmit = async (player) => {
    console.log(player);
    try {
      await playerService.create(player);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Wizard>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourPage />
        <FivePage />
      </Wizard>
    </form>
  );
}
