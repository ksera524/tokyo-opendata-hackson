interface IQuestionsJa {
    [key: string]: string;
    preschooler: string;
    junour12: string;
    junour34: string;
    junour56: string;
    middle1: string;
    middle2: string;
    middle3: string;
    high1: string;
    high2: string;
    high3: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
    i: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n: string;
    aa: string;
    bb: string;
    cc: string;
    dd: string;
    ee: string;
    ff: string;
    gg: string;
    hh: string;
    ii: string;
    jj: string;
    kk: string;
    ll: string;
    mm: string;   
}

export default function getQuestionList(questions: string[]) {


    const mappingedQuestions: string[] = [];

    const japanese: IQuestionsJa = {
        preschooler: '未就学児',
        junour12: '小学1〜2年生',
        junour34: '小学3〜4年生',
        junour56: '小学5〜6年生',
        middle1: '中学1年生',
        middle2: '中学2年生',
        middle3: '中学3年生',
        high1: '高校1年生',
        high2: '高校2年生',
        high3: '高校3年生',
        a: '子供にせがまれたため',
        b: '子供の所在地がわかるようにするため',
        c: 'メディアリテラシーがつくと思ったため',
        d: '習い事や塾等で必要なため',
        e: '仲間外れにされないか心配なため',
        f: '携帯電話にはない便利やアプリ等を使用するため',
        g: '保護者自身がスマートフォンにしたため',
        h: 'パソコンの代わり',
        i: '学校の授業、宿題等で必要なため',
        j: 'ゲーム機の代わり',
        k: '子供の疾病等があり、コミュニケーション手段として活用するため',
        l: 'お祝い等で、親戚等からもらったため',
        m: '店員に勧められた',
        n: 'その他',
        aa: 'トラブルに遭ったことはない',
        bb: 'アプリで友達等とトラブルになった',
        cc: 'メールで友達等とトラブルになった',
        dd: '誹謗中傷、チェーンメールなどが届いた',
        ee: '身に覚えのない料金請求のメールが届いた',
        ff: '歩きスマホ等により何らかのトラブルにあった',
        gg: 'スマホ向けの有料ゲームで多額の請求が届いた',
        hh: '個人の誹謗中傷などの書き込みをされた',
        ii: 'ネット上で知り合った人と会う約束をし、実際に会っていた。',
        jj: '個人情報を知られた（盗まれた）',
        kk: '下着姿や裸の写真を送っていた',
        ll: 'その他',
        mm: 'わからない',        
    } 

    for (const key of Object.keys(japanese)) {
        for(const x of questions) {
            if(key == x){
                mappingedQuestions.push(japanese[key])
            }

        }
    }

    return mappingedQuestions;
}