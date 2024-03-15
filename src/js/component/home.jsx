import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	const cardsData=[
		{
			title: "Randy Marsh",
			description: "Randy Marsh es el hijo de Marvin y la abuela Marsh, el esposo de Sharon y el padre de Stan y Shelly.",
			img: "https://i.pinimg.com/originals/2b/26/a6/2b26a62997a8d59e613b14b6585882e4.jpg",
			buttonUrl: "https://southpark.fandom.com/es/wiki/Randy_Marsh"
		},
		{
			title: "Chef",
			description: "Era más famoso por ser el chef de la cafetería de la Escuela Primaria de South Park y a quien acudían los chicos en busca de consejos, lo que a menudo lo hacía irrumpir en canciones sobre sexo.",
			img: "https://images3.alphacoders.com/590/590752.jpg",
			buttonUrl: "https://southpark.fandom.com/es/wiki/Jerome_%22Chef%22_McElroy"
		},
		{
			title: "Jimmy Valmer",
			description: "es un estudiante de la escuela primaria de South Park,que al igual que Timmy, tiene discapacidad, pero usa muletas para caminar y es capaz de hablar con la gente, a pesar de un ligero problema de tartamudeo.",
			img: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:c1ab3cdf-74f7-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn",
			buttonUrl: "https://southpark.fandom.com/es/wiki/Jimmy_Valmer"
		},
		{
			title: "Toallin",
			description: "Toallín es una toalla para hablar que fue diseñada genéticamente por Tynacorp, para permitirle que las personas se sequen según sea necesario dependiendo de la situación. ",
			img: "https://imgix.ranker.com/user_node_img/50105/1002099353/original/1002099353-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
			buttonUrl: "https://southpark.fandom.com/es/wiki/Toall%C3%ADn"
		}
	]
	return (
		<div className="text-center conteiner">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
			{cardsData.map((card,index) => {
				return(
					<Card key={index} title={card.title} description={card.description} img={card.img} buttonUrl={card.buttonUrl}/>
				)
			})}
			</div>
		</div>
	);
};

export default Home;

