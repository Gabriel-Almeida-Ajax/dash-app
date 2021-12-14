import { IItem, useApp } from '../../hooks/AppProvider';
import * as S from './style';

export const MenuLateral: React.FC = () => {
    const items = useApp().getLateralBarItems();

    return (
        <S.Container>
            {
                items.map((item: IItem) => (
                    <S.MenuItem key={item.id} onClick={item.callback}>
                        {item.content}
                    </S.MenuItem>
                ))
            }
        </S.Container>
    );
};