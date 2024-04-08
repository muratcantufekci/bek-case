import FrequentlyAskedQuestionsPage from '@/pages/SSS';

const FrequentlyAskedQuestions = () => {
  const data = [
    {
      "question": "Lorem ipsum nedir?",
      "answer": "Lorem ipsum, basın yayın sektöründe matbaacılık döneminde kullanılan bir dizgi metin örneğidir. Lorem ipsum metni, yazı karakterlerinin tasarımını göstermek amacıyla kullanılır ve gerçek anlam taşımaz."
    },
    {
      "question": "Ne zaman kullanılır?",
      "answer": "Lorem ipsum metni, bir tasarımın veya düzenin ne şekilde görüneceğini göstermek için boşluk metni olarak kullanılır. Tasarımcılar, Lorem ipsum kullanarak sayfa düzenlerini ve fontları test edebilirler."
    },
    {
      "question": "Neden kullanılır?",
      "answer": "Lorem ipsum, gerçek içeriğin dikkat dağıtıcı olabileceği durumlarda tasarımcıların dikkatini çekmez. Bu nedenle, tasarımcılar, tasarım üzerinde odaklanmak için Lorem ipsum gibi anlamsız metinler kullanır."
    },
    {
      "question": "Lorem ipsum'un kökeni nedir?",
      "answer": "Lorem ipsum metni, 1500'lerden beri kullanılan Latince kelimelerin bir karışımından oluşur. Kökeni tam olarak bilinmemekle birlikte, Rönesans döneminde kullanılan bir yazı tipi kataloğundan türetildiği düşünülmektedir."
    },
    {
      "question": "Lorem ipsum metni ne kadar yaygındır?",
      "answer": "Lorem ipsum, hala web tasarımı ve basılı medya gibi birçok endüstride yaygın olarak kullanılmaktadır. Çünkü gerçek içeriğin dikkati dağıtmasını önler ve tasarım odaklı çalışmayı kolaylaştırır."
    },
    {
      "question": "Nasıl kullanılır?",
      "answer": "Lorem ipsum metni, genellikle belirli bir tasarımın görünümünü test etmek veya bir web sitesi şablonunu doldurmak için kullanılır. Tasarımcılar, lorem ipsum metni yerine gerçek içerik eklediklerinde, tasarımın nasıl görüneceğini daha iyi görebilirler."
    },{
      "question": "Lorem ipsum metni ne kadar yaygındır?",
      "answer": "Lorem ipsum, hala web tasarımı ve basılı medya gibi birçok endüstride yaygın olarak kullanılmaktadır. Çünkü gerçek içeriğin dikkati dağıtmasını önler ve tasarım odaklı çalışmayı kolaylaştırır."
    },
    {
      "question": "Nasıl kullanılır?",
      "answer": "Lorem ipsum metni, genellikle belirli bir tasarımın görünümünü test etmek veya bir web sitesi şablonunu doldurmak için kullanılır. Tasarımcılar, lorem ipsum metni yerine gerçek içerik eklediklerinde, tasarımın nasıl görüneceğini daha iyi görebilirler."
    }
  ]
  

  return <FrequentlyAskedQuestionsPage data={data} />;
};

export default FrequentlyAskedQuestions;
