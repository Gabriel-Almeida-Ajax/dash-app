import { IItem } from '../../../hooks/AppProvider';
import * as S from '../style';

export const Hello: React.FC<IItem> = (props) => {
    return (
        <S.Name>
            {props.content}
        </S.Name>
    );
};