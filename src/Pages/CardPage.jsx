import Card from "../components/Card";
import myImage from "../assets/img.jpg";
const CardPage = () => {
  const handleCardClick = (id) => {
    console.log(`${id} Card  clicked`);
  };

  const cardData = [
    {
      id: 24,
      cardImg: myImage,
      cardHeading: "Lorem ipsum",
      cardDesciption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      cardBtnText: "Learn More",
    },
    {
      id: 28,
      cardImg: myImage,
      cardHeading: "Lorem ipsum",
      cardDesciption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      cardBtnText: "Learn More",
    },
  ];
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      {cardData.map((item) => {
        const data = {
          img: item.cardImg,
          heading: item.cardHeading,
          desciption: item.cardDesciption,
          btnText: item.cardBtnText,
          cardFunc: () => {
            handleCardClick(item.id);
          },
        };

        return <Card key={item.id} cardData={data}></Card>;
      })}
    </div>
  );
};
export default CardPage;
