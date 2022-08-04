import React, { useEffect } from 'react';
import { Flower } from '../../types/Flower'
import './Footer.scss';
import { useAppSelector, useAppDispatch } from '../../state/Hooks';
import { selectFlowers, addFlower } from '../../state/reducers/FooterFlowers';

export const Footer: React.FC = () => {
  const flowers = useAppSelector(selectFlowers);
  const dispatch = useAppDispatch();

  useEffect(() => {  
    fetch('https://flowrspot-api.herokuapp.com/api/v1/flowers')
      .then(response => response.json())
      .then(data => {
        data.flowers.forEach((flower: Flower) => {
          dispatch(addFlower(flower))
        })
      });
  }, []);

        
  return (
    <div className="footer">
      <div className="flowers-container">
        {flowers.map((flower: Flower) => {
          return (
            <div className="flower" key={flower.id}>
              <img src={flower.profile_picture}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}