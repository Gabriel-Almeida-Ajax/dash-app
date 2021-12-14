import { useApp } from '../../../hooks/AppProvider';
import * as S from '../style';

export const Board = () => {
    const items = useApp().getDashboardItems();
    const moves = useApp().getDashboardMoves();
    const dashconfig = useApp().getDashboardConfig();

    return (
        <S.ContainerDash {...dashconfig}>
            {
                items.map((item, index) => (
                    <S.Item key={index} gridArea={item.id}>
                        <S.ItemTitle>
                            {item.title}
                        </S.ItemTitle>
                        <S.ItemContent color={item.color}>
                            <S.ItemDashCotent>
                                {item.content}
                            </S.ItemDashCotent>
                        </S.ItemContent>
                    </S.Item>
                ))
            }
            <S.Item gridArea='movimento'>
                <S.ItemTitle> Movimentos </S.ItemTitle>
                <S.ItemContent>
                    {
                        moves.map((move, index) => (
                            <S.Move key={index}>
                                <S.MoveTitle>
                                    {move.title}
                                </S.MoveTitle>
                                <S.MoveContent value={move.value}>
                                    {move.value}
                                </S.MoveContent>
                            </S.Move>
                        ))
                    }
                </S.ItemContent>
            </S.Item>


        </S.ContainerDash>
    )
}