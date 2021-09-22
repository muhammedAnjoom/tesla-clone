import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftbtnText, rightbtnText, backgroundImg}) {
    
    return (
        <div>
            <Wrap bgIMage={backgroundImg}>
              <ItemText>
                  <h1>{title}</h1>
                  <p>{description}</p>
              </ItemText>
              <Button>
                   <ButtonGroup>
                        <LeftButton>
                           {leftbtnText}
                        </LeftButton>
                        { rightbtnText &&
                            <RightButton>
                           {rightbtnText}
                        </RightButton>
                        }
                   </ButtonGroup>
                  <DownArrow src="images/down-arrow.svg"/>
              </Button>
            </Wrap>
        </div>
    )
}

export default Section
 const Wrap = styled.div`
      width; 100vw;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('images/model-s.jpg');
      display: flex;
      flex-direction: column;
      justify-content: space-between; // vertical
      align-items: center; //horizontal
      background-image: ${props => `url("/images/${props.bgIMage}")`};
 `
 const ItemText = styled.div`
      padding-top: 15vh;
      text-align: center;

      
 `
 const ButtonGroup = styled.div`
          display: flex;
          margin-bottom: 30px;
          @media (max-width: 768px){
              flex-direction: column;
          }
 `
 const LeftButton = styled.div`
      background-color: rgb(23, 26, 32, 0.8);
      height: 40px;
      width: 256px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      opacity: 0.85;
      text-transfrom: uppercase;
      font-size: 12px;
      cursor: pointer;
      margin: 8px;

 `
 const RightButton =styled(LeftButton)`
       background: white;
       opacity: 0.65;
       color: black;
 `
 const DownArrow = styled.img`
      margin-top: 20px;
      height: 40px;
      overflow-x: hidden;
      padding-left: 242px;
      animation: animateDown infinite 1.5s;

 `
const Button = styled.div`

`