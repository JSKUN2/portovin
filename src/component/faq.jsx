import { h } from 'preact';
import { useState } from 'preact/hooks';
import Part from "./part"
import FadeContent from "../animasi/FadeContent"

export default function Faq(){
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where can I follow development updates?",
      jp1:"開発アップデートはどこで確認できますか？",
      jp2:"現在の開発状況や最新情報、制作過程のコンテンツはInstagramにて公開しています。プロジェクトの進捗、コンセプトアート、重要なお知らせなどを定期的に共有しています。",
      answer: "You can follow our latest development updates, previews, and behind-the-scenes content through our Instagram page. We regularly share progress from ongoing projects, visual concepts, and important announcements with the community.",
    },
    {
      question: "How can I support Grooth Studio?",
      jp1:"Grooth Studioを支援するには？",
      jp2:"私たちのゲームをプレイし、レビューし、社会に共有することで私たちをサポートできます。",
      answer: "You can support us by playing, reviewing, and sharing our games to the society.",
    },
    {
      question: "How can I contact the team?",
      jp1:"チームへの連絡方法は？",
      jp2:"提供されている場合は、独自のポートフォリオを通じてチームに連絡できますが、ポートフォリオが存在しない場合は、studiogrooth@gmail.com を通じてチームに連絡してください",
      answer:"You can reach out our team through their own portfolio if they provide, but if the portfolio doesn't exist, please contact it through studiogrooth@gmail.com",
    },
    {
      question: "Our current project ?",
      jp1:"私たちの現在のプロジェクトは？",
      jp2:"私たちは現在、面白い 2D ベースのマルチプレイヤー ゲームを開発しています。",
      answer:"We are currently developing entertaining 2d based multiplayer games.",
    },
    {
      question: "How to log in?",
      jp1: "ログインするにはどうすればよいですか？",
      jp2: `手動ログイン:
      　1. Grooth Pass ID を入力してください。
      　2. account.grooths.com で設定したパスワードを入力してください。
      　3. 「Log in」を押すと、ログインが完了します。
      タップログイン:
      　1. スマートフォンの NFC を有効にしてください。
      　2. ゲームを起動してください。
      　3. 「Log in」タブを開き、画面の指示に従ってください。`,
      answer: `Using Manual Method:
      　1. Type your Grooth Pass ID.
      　2. Type your password that you have set from account.grooths.com.
      　3. Press Log in and voila, you have logged in.
    Using Tap Method:
      　1. Enable NFC on your phone.
      　2. Open our games.
      　3. Go to log in tab, then follow the instructions shown on your screen.`
    },
    {
      question: "How to purchase Grooth Pass ?",
      jp1:"Grooth Passの購入方法は？",
      jp2:"現在、Grooth Passはインドネシア国内でのみご利用いただけます。インドネシア国外にお住まいの方は、デジタル版のお申し込みについてstudiogrooth@gmail.comまでお問い合わせください。インドネシア国内でご購入される場合も、studiogrooth@gmail.comまでお問い合わせください。Grooth Passはまだマーケットプレイスでは販売しておりません。",
      answer:"Currently, Grooth Pass is only available in Indonesia. If you are outside Indonesia, please contact studiogrooth@gmail.com to apply for the digital version. In order to purchase inside Indonesia, please also contact through studiogrooth@gmail.com. As we are not yet selling our Grooth Pass in marketplace",
    },
  ];

  const answerClass =
    "max-md:pl-6 py-4 w-[86vw] bg-[#272727] text-white max-md:text-[14px] font-light gap-3";

    return(
    <Part nama1="FAQ" nama2="よくある質問">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            {faqs.map((faq, index) => (
              <div key={index} className={`flex flex-col ${openIndex === index ?"mb-0":"mb-3"}`}>
                <div
                  className="flex flex-row justify-between hover:shadow-md w-[86vw] max-md:text-[14px] cursor-pointer text-white bg-[#0f0f0f] p-5 font-light"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-[1.6vw] max-md:text-[4.1855vw] whitespace-pre-wrap'>{faq.question}</h1>
                    <h3 className='text-[1.2vw] text-white/60 max-md:text-[3.1vw]'>{faq.jp1}</h3>
                  </div> 
                  <span className={`text-[38px] font-light ${openIndex === index ? "rotate-x-0" : "rotate-x-180"}`}>
                    <svg className="w-8 h-24 max-md:w-6 max-md:h-12" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 13.4192L28.417 0L31 2.68345L16.7915 17.4444C16.4489 17.8001 15.9844 18 15.5 18C15.0156 18 14.5511 17.8001 14.2085 17.4444L0 2.68345L2.58303 0L15.5 13.4192Z" fill="#636363"/>
                    </svg>
                  </span>
                </div>
                <div
                  className={`
                    ${answerClass}
                    transition-all duration-500 ease-in-out
                    overflow-hidden
                    ${openIndex === index ? "h-fit display-none py-4" : "hidden"}
                    flex flex-col
                  `}
                >
                 <h1 className='px-15 max-md:px-0 max-md:pr-10 text-[1.12vw] max-md:text-[3.8vw] whitespace-pre-line'>{faq.answer}</h1>
                 <h1 className='
                    px-15
                    max-md:px-0 
                    max-md:pr-10
                    text-[1.009vw]
                    max-md:text-[2.9vw]
                    text-white/60
                    whitespace-pre-line
                    break-words
                    overflow-wrap-anywhere
                 
                 '>{faq.jp2}</h1>
                </div>
              </div>
            ))}
        </FadeContent>
    </Part>)
}