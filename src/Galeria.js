
import { ScrollView, Text } from "react-native";
import Pelicula from "./Pelicula";

export default function Galeria() {

    var peliculas = [
        {
            nombre: 'Beastars',
            descripcion: 'a ahsd hasd asd asdjhasdh sd sdf sg dfh fgjh fhsd fsadf sdfsdfg dfhdf',
            url: 'https://youtube.com',
            imagen: 'beastars.jpg'
        },
        {
            nombre: 'End Game',
            descripcion: 'a ahsd hasd asd asdjhasdh sd sdf sg dfh fgjh fhsd fsadf sdfsdfg dfhdf',
            url: 'https://www.youtube.com/watch?v=IXsURQxoGe8',
            imagen: 'endgame.jpg'
        },
        {
            nombre: 'Joker',
            descripcion: 'a ahsd hasd asd asdjhasdh sd sdf sg dfh fgjh fhsd fsadf sdfsdfg dfhdf',
            url: 'https://www.youtube.com/watch?v=znk2OICHbjY',
            imagen: 'joker.jpg'
        },
        {
            nombre: 'Logan',
            descripcion: 'a ahsd hasd asd asdjhasdh sd sdf sg dfh fgjh fhsd fsadf sdfsdfg dfhdf',
            url: 'https://youtube.com',
            imagen: 'logan.jpg'
        },
        {
            nombre: 'Shingeki No Kyogin',
            descripcion: 'a ahsd hasd asd asdjhasdh sd sdf sg dfh fgjh fhsd fsadf sdfsdfg dfhdf',
            url: 'https://youtube.com',
            imagen: 'snk.png'
        }
    ]
    
    return(
        <>
            <ScrollView>
                { peliculas.map( ( p, i ) => (
                    <Pelicula
                        key={ i }
                        titulo={ p.nombre }
                        descripcion={ p.descripcion }
                        imagen={ p.imagen }
                        url={ p.url }
                    />
                ) ) }
            </ScrollView>
        </>
    )

}
