import Card from "./card.jsx";
import "./card.css";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D

"
        title="Bird"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
eveniet dolor magni accusamus, officiis unde asperiores! Et dolorem,
ea cupiditate sit possimus deleniti veniam nobis! Obcaecati eius
recusandae odit nostrum?"
      />
      <Card
        img="https://images.unsplash.com/photo-1555169062-013468b47731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D"
        title="Parrot"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        eveniet dolor magni accusamus, officiis unde asperiores! Et dolorem,
        ea cupiditate sit possimus deleniti veniam nobis! Obcaecati eius
        recusandae odit nostrum?"
      />
      <Card
        img="https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJpcmR8ZW58MHx8MHx8fDA%3D"
        title="Blue Bird"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        eveniet dolor magni accusamus, officiis unde asperiores! Et dolorem,
        ea cupiditate sit possimus deleniti veniam nobis! Obcaecati eius
        recusandae odit nostrum?"
      />
    </div>
  );
}

export default App;
