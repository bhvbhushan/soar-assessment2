import { Button } from '@mui/material';
import { useAlert, useUser } from '_context';
import { getCardData } from '_controllers';
import { cardDataInterface } from '_interfaces';
import { CardComponent, ModuleComponent } from '_lib';
import { CreditCard } from '_styledComponents';
import { useEffect, useState } from 'react';

const CardWrapperComponent = () => {
  const { state: userState } = useUser();
  const userName = userState.user?.name || 'Max Payne';
  const { showError } = useAlert();
  const [cards, setCards] = useState<cardDataInterface[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const { success, data } = await getCardData();
      if (success) {
        setCards(data as cardDataInterface[]);
      } else {
        const message = 'Error fetching card details';
        showError(message);
      }
    };
    getCards();
  }, []);
  const btnComp = <Button>See All</Button>;
  return (
    <ModuleComponent
      primaryHeader="My Cards"
      btnComp={btnComp}
      singleChildCard={false}
      width={'60%'}
    >
      <>
        {cards.length > 0 &&
          cards.map((card) => (
            <CreditCard>
              {(isFocussed) => (
                <CardComponent
                  isFocused={isFocussed}
                  cardData={card}
                  userName={userName}
                  key={card.cardNumber}
                />
              )}
            </CreditCard>
          ))}
      </>
    </ModuleComponent>
  );
};

export default CardWrapperComponent;
