import { axiosRequestWrapper, generateCCNum, maskCreditCard } from '_helpers';
import { cardDataInterface } from '_interfaces';

export const getCardData = async () => {
  const response = await axiosRequestWrapper<cardDataInterface[]>('/api/cards');
  if (response.success) {
    const cardData = (response.data as cardDataInterface[]).map((card) => ({
      ...card,
      cardNumber: maskCreditCard(generateCCNum()),
    }));
    return { success: response.success, data: cardData };
  } else {
    return response;
  }
};
