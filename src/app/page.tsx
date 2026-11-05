import Link from "next/link";

const mockUrls = ["https://2h8idteg49.ufs.sh/f/dlYBIPE7vebIaRt5Jt3ZeubfB3OYPdHJ7psNoqritXLFTRmI", "https://2h8idteg49.ufs.sh/f/dlYBIPE7vebINGTfOuyHgWNI23yTCMQS0YnXbVrJkPzEK1j9", "https://2h8idteg49.ufs.sh/f/dlYBIPE7vebI00n6R0haG1z7TBNUYV4CiqWpwml3cKSyuLjD", "https://2h8idteg49.ufs.sh/f/dlYBIPE7vebIBvZkLLjsh7FRAqxlUQrtInVcWg0EdXGyHzCY"]
const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
   url}))

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FF0000] to-[#12D900] text-white; 	--tw-gradient-from-position: 20%;">
      <div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
    <div>
      <h1 className = "	font-serif">My song 1</h1>
      <p className="	text-violet-900 font-sans	">残酷な天使のように
少年よ 神話になれ<br></br>
蒼い風がいま 胸のドアを叩いても<br></br><br></br>
私だけをただ見つめて<br></br>
微笑んでるあなた<br></br>
そっとふれるもの もとめることに夢中で<br></br>
運命さえまだ知らない いたいけな瞳<br></br><br></br>
だけどいつか気付くでしょう その背中には<br></br>
遥か未来 めざすための羽根があること<br></br><br></br>
残酷な天使のテーゼ<br></br>
窓辺からやがて飛び立つ<br></br>
ほとばしる熱いパトスで<br></br>
思い出を裏切るなら<br></br>
この宇宙を抱いて輝く<br></br>
少年よ 神話になれ<br></br><br></br>
ずっと眠ってる 私の愛の揺りかご<br></br>
あなただけが 夢の使者に呼ばれる朝がくる<br></br>
細い首筋を 月あかりが映してる<br></br>
世界中の時を止めて 閉じこめたいけど<br></br><br></br>
もしもふたり逢えたことに意味があるなら<br></br>
私はそう 自由を知るためのバイブル<br></br><br></br>
残酷な天使のテーゼ<br></br>
悲しみがそしてはじまる<br></br>
抱きしめた命のかたち<br></br>
その夢に目覚めたとき<br></br>
誰よりも光を放つ<br></br>
少年よ 神話になれ<br></br><br></br>
人は愛をつむぎながら歴史をつくる<br></br>
女神なんてなれないまま 私は生きる<br></br><br></br>
残酷な天使のテーゼ<br></br>
窓辺からやがて飛び立つ<br></br>
ほとばしる熱いパトスで<br></br>
思い出を裏切るなら<br></br>
この宇宙を抱いて輝く<br></br>
少年よ 神話になれ</p>
    </div>


    </main>
  );
}
