import React, {useState} from 'react';
import AccordianItem from '../AccordianItem/AccordianItem';
import AccordianText from '../AccordianText/AccordianText';
import AccordianTitle from '../AccordianTitle/AccordianTitle';
import './AccordianComponent.css';

const data = [
    {
        'title': 'What is Netflix',
        'text': "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week! "
    },
    {
        'title': 'How much does Netflix cost',
        'text' : "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
    },
    {
        'title': 'Where can i Watch',
        'text': "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
        'title': 'How do i Cancel',
        'text': "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        'title' : "What can i watch Netflix",
        "text": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        'title' : 'is Netflix good for kids',
        "text" : "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
    }

];


function AccordianComponent( {children , ...restProps }) {
    const [AccordianState , setAccordianState] = useState(data.map(() => false))
  return (
    <div className='accordian-component' { ...restProps }>
        <h1 className='accordian-heading'> Frequently Asked Questions </h1>
        <div className='accordian-wrapper'>
        {
            data.map((item , index ) => (
                <AccordianItem>
                    <AccordianTitle 
                       isOpen={AccordianState[index]}
                       handleClick={() => {
                        let currentValue = AccordianState[index];
                        let newValue = !currentValue;
                        let newAccordianState = [...AccordianState];
                        for (let i = 0; i < AccordianState.length; i++ ) {
                            newAccordianState[i] = false;
                        }
                        newAccordianState[index] =newValue;
                        setAccordianState(newAccordianState);

                    }}> { item.title }</AccordianTitle>
                    <AccordianText isOpen={AccordianState[index]}> { item.text }</AccordianText>
                </AccordianItem>
            ))
        }
        </div>

    </div>
    
  )
}

export default AccordianComponent;