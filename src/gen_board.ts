export function generateBoard(rowsize:number, colsize:number, objcount:number, varmin:number, varmax:number) {

    // 配列の作成
    let board = new Array<boolean[]>(rowsize);

    // 無限ループ
    while(true) {

        // マップの初期化・作成
        for(let y = 0; y < rowsize; ++y) {
            board[y] = (new Array<boolean>(colsize)).fill(false);
        }

        // オブジェクトの配置
        for(let i = 0; i < colsize * 2; ++i) {
            let x = Math.floor(Math.random() * 7);
            let y = Math.floor(Math.random() * (rowsize - 4) + 2);
            if(board[y][x]) { --i; } else { board[y][x] = true; }
        }

        // 袋小路の走査・あるなら作成やり直し
        let deadend = false;
        for(let x = 0; x < colsize; ++x) {
            for(let y = 0; y < rowsize; ++y) {
                let count = 0;
                count += (x - 1) < 0 || colsize <= (x - 1) || board[y][x - 1] ? 1 : 0;
                count += (x + 1) < 0 || colsize <= (x + 1) || board[y][x + 1] ? 1 : 0;
                count += (y - 1) < 0 || rowsize <= (y - 1) || board[y - 1][x] ? 1 : 0;
                count += (y + 1) < 0 || rowsize <= (y + 1) || board[y + 1][x] ? 1 : 0;
                deadend = count >= 3;
                if(deadend) break;
            }
            if(deadend) break;
        }
        if(deadend) continue;

        // ジキルデュの移動範囲
        let unpassed = new Array<number[]>();
        for(let x = 0; x < colsize - 1; ++x) {
            for(let y = 0; y < rowsize - 1; ++y) {
                if(board[y + 0][x + 0]) continue;
                if(board[y + 0][x + 1]) continue;
                if(board[y + 1][x + 0]) continue;
                if(board[y + 1][x + 1]) continue;
                unpassed.push([y + 0, x + 0, y + 0, x + 1, y + 1, x + 0, y + 1, x + 1]);
            }
        }

        // 幅優先探索用のキューを用意
        let queue = new Array<number[]>();
        let position = unpassed.shift();
        if(position) queue.push(position);

        // 幅優先探索でジキルデュの可動域を走査
        while(queue.length > 0) {

            let position = queue.shift();
            if(position) {

                let equal = function(a:any[], b:any[]) {
                    for(let i = 0; i < a.length; ++i) { if(a[i] != b[i]) return false; }
                    return true;
                }

                let pos_u = position.map((v, i, _) => i % 2 == 0 ? v - 1 : v);
                let index_u = unpassed.findIndex((v, _, __) => equal(v, pos_u));
                if(index_u != -1) {
                    queue.push(pos_u);
                    unpassed.splice(index_u, 1);
                }
                
                let pos_d = position.map((v, i, _) => i % 2 == 0 ? v + 1 : v);
                let index_d = unpassed.findIndex((v, _, __) => equal(v, pos_d));
                if(index_d != -1) {
                    queue.push(pos_d);
                    unpassed.splice(index_d, 1);
                }

                let pos_l = position.map((v, i, _) => i % 2 == 1 ? v - 1 : v);
                let index_l = unpassed.findIndex((v, _, __) => equal(v, pos_l));
                if(index_l != -1) {
                    queue.push(pos_l);
                    unpassed.splice(index_l, 1);
                }

                let pos_r = position.map((v, i, _) => i % 2 == 1 ? v + 1 : v);
                let index_r = unpassed.findIndex((v, _, __) => equal(v, pos_r));
                if(index_r != -1) {
                    queue.push(pos_r);
                    unpassed.splice(index_r, 1);
                }
            }
        }

        // 可動域が二つ以上あるならば作成やり直し
        if(unpassed.length > 0) continue;

        // 平均を9.5として標準偏差を計算
        let variance = 0.0;
        for(let x = 0; x < colsize; ++x) {
            for(let y = 0; y < rowsize; ++y) {
                if(board[y][x]) variance += Math.pow(9.5 - y, 2);
            }
        }
        variance = Math.sqrt(variance);

        // 標準偏差が指定未満or超過で作成やり直し
        if(variance < varmin) continue;
        if(variance > varmax) continue;

        // 作成終わり
        return board;
    }
}