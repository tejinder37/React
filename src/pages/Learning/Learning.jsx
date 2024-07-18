import Day from "../../components/Day";
import LearningProps from "../../components/LearningProps";
import Profile from "../../components/Profile";
import Test from "../../components/Test";
import ConditionalRendering from "../../components/ConditionalRendering";
import ArrayMapping from "../../components/ArrayMapping";
import FancyText from "../../components/FancyText";
import Copyright from "../../components/Copyright";
import InspirationGenerator from "../../components/InspirationGenerator";
import Image from "../../components/Image";
import Queuing from "../../components/Queuing";
import ObjectsInState from "../../components/ObjectsInState";
import Forms from "../../components/Forms";
import FormsAdvanced from "../../components/FormsAdvaced";
import NestedObject from "../../components/NestedObject";
import Immer from "../../components/Immer";
import Dropzone from "../../components/Dropzone";
import ArrayInState from "../../components/ArrayInState";
import ReplacingItemFromAnArray from "../../components/ReplacingItemFromAnArray";
import AddingElement from "../../components/AddingElement";
import Todos from "../../components/Todo/Todos";
import Accordian from "../../components/Accordian";
import TaskApp from "../../projects/todolistapp/TaskApp";
import TaskAppReducer from "../../projects/todolistapp copy/TaskAppReducer";
import TaskAppAdvanced from "../../projects/todoAppAdvanced/TodoAppAdvanced";
import DraggableList from "../../components/DraggableList";

const propsObj = {
  name: "harjeet",
  age: 22,
  isMarried: false,
  address: {
    vill: "ambala",
    street: 20,
    hNo: 200,
  },
  hobbies: ["gaming", "dancing"],
};
const Learning = () => {
  return (
    <div>
      <Day />
      <div>
        {/* <Profile /> */}
        {/* // calling way one */}
        {/* <Profile>
          <h1>My name is Harjeet Singh</h1>
        </Profile>
        <Profile>
          <h1>My name is Meenakshi</h1>
        </Profile> */}

        {/* <LearningProps user={propsObj} /> */}
        {/* <Test/> */}
        {/* <ConditionalRendering name="Harjeet" /> */}
        {/* <ArrayMapping/> */}

        {/* <FancyText title text="Learning about UI tree" />
        <InspirationGenerator>
          <Copyright year={2024} />
        </InspirationGenerator> */}
        {/* <Image /> */}
        {/* <Queuing/> */}
        {/* <ObjectsInState/> */}
        {/* <Forms/> */}
        {/* <FormsAdvanced/> */}
        {/* <NestedObject/> */}
        {/* <Immer/> */}
        {/* <ArrayInState/> */}
        {/* <ReplacingItemFromAnArray/> */}
        {/* <AddingElement/> */}
        {/* <Todos/> */}
        {/* <Accordian/> */}
        {/* <TaskApp/> // using useState */}
        {/* <TaskAppReducer /> */}
        {/* <TaskAppAdvanced/> */}

        {/* <Dropzone /> */}
        <DraggableList/>
      </div>
    </div>
  );
};

export default Learning;
