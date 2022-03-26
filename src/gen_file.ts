export function generateXml(board:boolean[][]) {
    
    // テーブル情報を格納する要素の作成
    var content = `<?xml version="1.0" encoding="UTF-8"?><game-table name="チェス - 2" width="18" height="40" gridSize="50" imageIdentifier="d3e2ee12ee48f73e8d02da3d1d910850dcf19cd2051c4729473984f9c608a601" backgroundImageIdentifier="135be99407c465c3b297d0b332a85a2d99937f856baa339dae89b82e3386c5ef" backgroundFilterType="black" selected="true" gridType="0" gridColor="#0000006e" girdSize="50">`;

    // 地形を作成
    for(let y = 0; y < board.length; ++y) {
        for(let x = 0; x < board[y].length; ++x) {
            if(board[y][x]) {
                content += `<terrain location.name="table" location.x="${(x+1)*100}" location.y="${(y+1)*100}" posZ="0" isLocked="true" mode="3" rotate="0"><data name="terrain"><data name="image"><data type="image" name="imageIdentifier"></data><data type="image" name="wall">./assets/images/tex.jpg</data><data type="image" name="floor">./assets/images/tex.jpg</data></data><data name="common"><data name="name">地形</data><data name="width">2</data><data name="height">2</data><data name="depth">2</data></data><data name="detail"></data></data></terrain>`;
            }
        }
    }
    content += `</game-table>`;

    // 作成したドキュメントを返す
    return content;
}