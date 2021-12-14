import * as S from './style';
import { Board } from './board';
export const Dashboard: React.FC = (props) => {
    return (
        <S.Container>
            <S.Navigation>
                <span>
                    {'Dashboard'}
                </span>
                <span>
                    {'> Home'}
                </span>
            </S.Navigation>
            <Board />
        </S.Container>
    );
};
