import React, { useState } from "react";
import Panel from "./Panel";

const Accordian = () => {
  const [isActivePanel, setIsActivePanel] = useState(0);// lifiting up state.
  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="Rohit"
        isActive={isActivePanel === 0}
        onShow={() => {
          setIsActivePanel(0);
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
        consequatur?
      </Panel>
      <Panel
        title="Sanpreet"
        isActive={isActivePanel === 1}
        onShow={() => {
          setIsActivePanel(1);
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        minus, fugit suscipit facere unde odio maiores, adipisci molestias
        architecto tempora quisquam molestiae aliquid nulla tempore, hic earum
        laudantium provident maxime nemo accusantium iure at veritatis? Qui unde
        distinctio, facilis deserunt illum, veniam explicabo aut, sequi quidem
        assumenda iusto tempora optio quis odio recusandae id exercitationem
        molestias voluptatibus ad natus debitis quisquam numquam nobis iure?
        Sed, fugiat! Quae vel esse dolorem odio ipsam illum nobis non
        consequuntur, alias rerum officiis hic nesciunt dolorum. Adipisci
        voluptatibus accusamus fuga veniam quia illo nulla deleniti. Minus eum
        est eaque deleniti a at molestias ducimus!
      </Panel>
    </div>
  );
};

export default Accordian;
