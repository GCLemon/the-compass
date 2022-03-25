<template>
    <h1>The Compass チェスマップジェネレータ</h1>
    <div>
        このページは、華麗なる怪盗TRPG PHANTOMISM シナリオ「The Compass」の2回目で使用するチェスマップを自動生成するものです。
        下のボタンをクリックすると、チェスマップ情報を含んだXMLファイルがダウンロードされます。
        ダウンロードされたXMLファイルをUdonariumの画面にドラッグ&ドロップすると、チェスマップを表示することができます。
    </div>
    <div><input type="button" value="チェスマップを生成" @click="loadXml"></div>
    <div>
        PHANTOMISMの著作権は全て「miRa」「つきのふね」に帰属します。
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 720px;
}

input {
    margin-top: 12px;
    margin-bottom: 12px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { generateBoard } from './gen_board';
import { generateXml } from './gen_file';

export default defineComponent({
    methods: {
        loadXml() {
            let board = generateBoard(18, 7, 2, 14, 15);
            let boardXml = generateXml(board);
            
            let blob = new Blob([boardXml], {'type':'text/xml'});
            let url = URL.createObjectURL(blob);
            let link = document.createElement('a');

            document.body.appendChild(link);
            link.download = 'chess-map.xml';
            link.href = url;
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }
    }
});
</script>
