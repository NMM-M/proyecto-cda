import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CardActivity from './CardActivity';


const TypeActivityNavigationBar = () => {

    const Tab = createMaterialTopTabNavigator();
    const [activityTypes, setactivityTypes] = useState([
        {id:1, type:'Video', title:'Actuacion',concept:'La celula', description:'Crea un video de un  minuto, donde tu y tus amigos representen el siguiente concepto.', instruccion:'Grabe un video, suba a Youtube y copie el link en el cuadro a continuacion.'},
        {id:2, type:'Text', title:'Resumen',concept:'La Celula', description:'Haz un resumen indicando las caracteristicas de este tema.'},
        {id:3, type:'Audio', title:'Entrevista',},
    ]);


    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    allowFontScaling:true,
                    labelStyle:{
                        fontSize:16,
                        fontWeight:'bold'
                    }
                }}
            >
                {activityTypes.map(type => (
                    <Tab.Screen
                        key={type.id}
                        name={type.type}
                        children={() => (
                            <CardActivity 
                                titleActivity={type.title} 
                                contentActivity={
                                    {
                                        id:type.id, 
                                        concept:type.concept,
                                        description:type.description,
                                        instruccion:type.instruccion
                                    }
                                }
                            />
                        )}
                    />
                ))}
            </Tab.Navigator>
        </> 
    )
} 
export default TypeActivityNavigationBar;