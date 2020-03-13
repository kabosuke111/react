import React from 'react';
import { useSpring, useTrail, animated, config } from "react-spring";
import '../../../css/App.css';

const TopSectionText = () => {
    return (
        <div class="page_top-text_box center">
            <p class="page_top-text_item is-fs65"><span class="bold">楽しい</span>を作ろう</p>
            <p class="page_top-text_item">ライフワーク、自社プロダクト、発信するコンテンツ...<br />
            会社全体で一丸となり、<br />
            社員・顧客に「楽しい」と感じてもらえる様取り組んでいきます。</p>
        </div>
    );
}

export default TopSectionText;