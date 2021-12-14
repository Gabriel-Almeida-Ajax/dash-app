import { useRef } from 'react';
import { IItem, useApp } from '../../../hooks/AppProvider';
import * as S from '../style';

export const Foto: React.FC<IItem> = (props) => {
    const btn = useRef<HTMLInputElement>();
    const [userImage, setUserImage] = useApp().useUserImage();

    const click = () => {
        if (btn.current) {
            btn.current.click();

            btn.current.onchange = () => {
                if (btn.current?.files?.length) {
                    const file = btn.current.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const dataUrl = reader.result as string;
                            setUserImage(dataUrl);
                        };
                        reader.readAsDataURL(file);
                    }
                }
            }
        }
    }


    return (<>
        <S.Upload ref={btn} type="file" accept="image/*" />
        <S.Image onClick={click} alt={props.id} src={userImage || props.content} width={'70px'} />
    </>);
};