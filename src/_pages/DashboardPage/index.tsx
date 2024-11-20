import { CardComponent } from '_lib';
import { CreditCard } from '_styledComponents';
import styled from 'styled-components';

const DashboardPage = () => {
  return (
    <>
      <StyledCardListWrapper className="sm:w-3/5  w-100%">
        <CreditCard>
          {(isFocussed) => <CardComponent isFocused={isFocussed} />}
        </CreditCard>

        <CreditCard>
          {(isFocussed) => <CardComponent isFocused={isFocussed} />}
        </CreditCard>
      </StyledCardListWrapper>
    </>
  );
};

const StyledCardListWrapper = styled.div`
  overflow: auto;
  border: black solid 1px;
  // padding: 1rem;
  display: flex;
  flex-direction: row;
`;

export default DashboardPage;
