import { useApp } from '../../hooks/AppProvider';
import * as S from './style';

import { Hello } from './hello';
import { Foto } from './foto';

export const NavBar: React.FC = () => {
    const item = useApp().getNavBarItems();

    return (
        <S.Container>
            {
                item.map((item) => {
                    switch (item.type) {
                        case 'text':
                            return <Hello key={item.id} {...item} />;
                        case 'img':
                            return <Foto key={item.id} {...item} />;
                        default:
                            return <></>;
                    }
                })
            }
        </S.Container>
    );
};