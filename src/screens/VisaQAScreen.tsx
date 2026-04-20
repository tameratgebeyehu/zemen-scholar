import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronDown, ChevronUp, Lightbulb, Search, X } from 'lucide-react-native';
import { useAppTheme } from '../context/AppContext';
import { theme as baseTheme } from '../theme/theme';
import { PremiumTouchable } from '../components/common/PremiumTouchable';

interface AccordionItemProps {
  question: string;
  answer: string;
  tips: string[];
  check?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const TipBox = ({ tips }: { tips: string[] }) => {
  const theme = useAppTheme();
  return (
    <View style={[styles.tipBoxContainer, { backgroundColor: theme.colors.primary + '08', borderColor: theme.colors.primary + '15' }]}>
      <View style={styles.tipHeader}>
        <Lightbulb color={theme.colors.primary} size={16} strokeWidth={2.5} />
        <Text style={[styles.tipTitle, { color: theme.colors.primary }]}>PRO TIPS</Text>
      </View>
      {tips.map((tip, idx) => (
        <View key={idx} style={styles.bulletRow}>
          <View style={[styles.bulletDot, { backgroundColor: theme.colors.primary }]} />
          <Text style={[styles.tipText, { color: theme.colors.textSecondary }]}>{tip}</Text>
        </View>
      ))}
    </View>
  );
};

const AccordionItem = ({ question, answer, tips, check, isOpen, onToggle }: AccordionItemProps) => {
  const theme = useAppTheme();
  
  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
      <PremiumTouchable 
        style={styles.cardHeader} 
        onPress={onToggle}
      >
        <Text style={[styles.questionText, { color: theme.colors.text }]}>{question}</Text>
        {isOpen ? (
          <ChevronUp color={theme.colors.primary} size={20} />
        ) : (
          <ChevronDown color={theme.colors.textSecondary} size={20} />
        )}
      </PremiumTouchable>
      
      {isOpen && (
        <View style={[styles.contentContainer, { borderTopColor: theme.colors.border + '50' }]}>
          {check && (
            <View style={[styles.checkContainer, { backgroundColor: theme.colors.primary + '05' }]}>
              <Text style={[styles.checkLabel, { color: theme.colors.primary }]}>WHAT THEY ARE CHECKING</Text>
              <Text style={[styles.checkText, { color: theme.colors.text }]}>{check}</Text>
            </View>
          )}
          <Text style={[styles.answerLabel, { color: theme.colors.textSecondary }]}>RECOMMENDED ANSWER</Text>
          <Text style={[styles.answerText, { color: theme.colors.text }]}>"{answer}"</Text>
          <TipBox tips={tips} />
        </View>
      )}
    </View>
  );
};

const VISA_QUESTION_BANK = [
  {
    id: 's1',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'Why do you want to study in the US?',
    answer: 'The US higher education system offers unparalleled research facilities and a diverse learning environment that perfectly matches my career goals in specialized technology.',
    check: 'They are evaluating your academic motivation and whether you genuinely care about the education quality.',
    tips: ['Be specific about US-only advantages', 'Avoid generic "it\'s a great country" answers']
  },
  {
    id: 's2',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'Why are you planning to continue your education in the US?',
    answer: 'I want to build on my local foundations by immersing myself in the world-leading innovation and critical thinking frameworks that US universities are known for.',
    check: 'They want to see the logical progression from your current state to your US goals.',
    tips: ['Connect your past education to this next step']
  },
  {
    id: 's3',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'Why this major?',
    answer: 'I chose this major because I am passionate about solving specific problems in my community, and this program provides the exact technical training I need.',
    check: 'Checking for subject-matter passion and career alignment.',
    tips: ['Personalize the reason with a project or experience']
  },
  {
    id: 's4',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'What will you specialize in?',
    answer: 'I plan to focus on my niche specialization, specifically exploring how advanced concepts can be applied to improve efficiency in my target industry.',
    check: 'Testing if you have read the curriculum and have a clear niche.',
    tips: ['Mention a specific course or specialization path']
  },
  {
    id: 's5',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'How does this program relate to your past studies/work?',
    answer: 'My background provides the fundamentals, while this program offers the advanced specialization I need to reach the next level of expertise.',
    check: 'Checking for a logical academic or professional trajectory.',
    tips: ['Focus on the "Gap" this program fills']
  },
  {
    id: 's6',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'Where did you study before?',
    answer: 'I completed my previous degree at my local institution, where I focused on my core subjects and excelled in academic projects.',
    check: 'Basic verification of your background.',
    tips: ['State the name of your school clearly and with pride']
  },
  {
    id: 's7',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'What was your GPA?',
    answer: 'My cumulative GPA demonstrated strong academic consistency, and I was especially strong in my core major-related subjects.',
    check: 'Verifying academic consistency and performance.',
    tips: ['Know your numbers perfectly—no hesitation']
  },
  {
    id: 's8',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'What are your test scores (IELTS, TOEFL, SAT, etc.)?',
    answer: 'I achieved competitive scores on my standardized tests, which demonstrates my readiness for a rigorous English-language academic environment.',
    check: 'Checking if you meet the baseline requirements for success.',
    tips: ['Memorize all scores for every test you took']
  },
  {
    id: 's9',
    category: 'Study & Academic',
    icon: '🎓',
    question: 'How good is your English?',
    answer: 'I am proficient in English, as evidenced by my test scores and my long-term immersion in academic English materials.',
    check: 'Assessing your ability to survive in a US classroom.',
    tips: ['Answer this naturally—the way you speak is the proof']
  },

  // UNIVERSITY & APPLICATION
  {
    id: 'u1',
    category: 'University & Application',
    icon: '🏫',
    question: 'Why did you choose this university?',
    answer: 'I chose this university specifically for its unique faculty expertise, and because the curriculum matches my research interests perfectly.',
    check: 'Testing "Institutional Fit"—did you apply to the right school for you?',
    tips: ['Mention a specific professor, lab, or club']
  },
  {
    id: 'u2',
    category: 'University & Application',
    icon: '🏫',
    question: 'How many universities did you apply to?',
    answer: 'I applied to a focused list of universities that all have strong programs in my field, to ensure I found the best possible academic fit.',
    check: 'Checking for organization and a serious application strategy.',
    tips: ['Be honest. Applying to 3-8 is standard and looks good']
  },
  {
    id: 'u3',
    category: 'University & Application',
    icon: '🏫',
    question: 'How many accepted you?',
    answer: 'I was fortunate to be accepted by multiple schools, but I chose this university as my top choice for its specific research focus.',
    check: 'Checking your overall desirability as a student.',
    tips: ['Highlight that your current choice was your favorite']
  },
  {
    id: 'u4',
    category: 'University & Application',
    icon: '🏫',
    question: 'How many rejected you?',
    answer: 'A few universities did not offer me admission. This is a very competitive process, and I focused my energy on the schools where I had the best fit.',
    check: 'Testing your honesty and ability to handle the competition.',
    tips: ['Answer matter-of-factly—rejections happen to everyone']
  },
  {
    id: 'u5',
    category: 'University & Application',
    icon: '🏫',
    question: 'What do you know about your university?',
    answer: 'It is world-renowned for its specific departments and has a strong focus on student values, which I deeply appreciate.',
    check: 'Checking if you signed up blindly or with intent.',
    tips: ['Know the school colors, mascot, or a recent achievement']
  },
  {
    id: 'u6',
    category: 'University & Application',
    icon: '🏫',
    question: 'Do you know your professors?',
    answer: 'Yes, I am particularly interested in the work of the leading faculty in my department, and I hope to take their classes.',
    check: 'Testing the depth of your research and commitment.',
    tips: ['Memorize at least two names from your department']
  },
  {
    id: 'u7',
    category: 'University & Application',
    icon: '🏫',
    question: 'Where is your university located?',
    answer: 'It is located in its specific city and state, which provides a great environment for my major and research.',
    check: 'Basic geographical awareness of your future home.',
    tips: ['Know the state and the major city nearby']
  },
  {
    id: 'u8',
    category: 'University & Application',
    icon: '🏫',
    question: 'What do you know about that city?',
    answer: 'The city is known for its local industries and provides a safe, vibrant environment for international students.',
    check: 'Checking if you are prepared for the lifestyle change.',
    tips: ['Mention one fact like the weather or local industry']
  },

  // FINANCIAL QUESTIONS
  {
    id: 'f1',
    category: 'Financial Questions',
    icon: '💰',
    question: 'Who will sponsor your education?',
    answer: 'My education is sponsored by my family/organization, who are dedicated to supporting my academic journey.',
    check: 'Identifying the source of funding to ensure it is legitimate.',
    tips: ['Be clear and name the sponsor immediately']
  },
  {
    id: 'f2',
    category: 'Financial Questions',
    icon: '💰',
    question: 'What does your sponsor do?',
    answer: 'My sponsor is a professional at their organization, where they have worked for many years in a stable role.',
    check: 'Checking for stable, verifiable income.',
    tips: ['Summarize their role and company in one sentence']
  },
  {
    id: 'f3',
    category: 'Financial Questions',
    icon: '💰',
    question: 'What is your sponsor’s income?',
    answer: 'My sponsor earns a stable annual income that easily covers my tuition and living expenses as outlined in my financial docs.',
    check: 'Verifying that they can realistically afford the US tuition.',
    tips: ['Know the exact yearly or monthly figure']
  },
  {
    id: 'f4',
    category: 'Financial Questions',
    icon: '💰',
    question: 'What is your own income?',
    answer: 'I have been working as a professional where I earn a stable salary, which I plan to use for my personal expenses.',
    check: 'Checking if you have personal "skin in the game".',
    tips: ['If you don\'t work, just say you are a full-time student']
  },
  {
    id: 'f5',
    category: 'Financial Questions',
    icon: '💰',
    question: 'How much does your school cost?',
    answer: 'The total cost of attendance, including tuition, housing, and insurance, is clearly outlined on my I-20 document.',
    check: 'Testing if you have actually read the I-20 document.',
    tips: ['Memorize the exact number on your I-20 form']
  },
  {
    id: 'f6',
    category: 'Financial Questions',
    icon: '💰',
    question: 'How will you fund your studies?',
    answer: 'Funding will come from a combination of my family\'s liquid savings, property income, and my university scholarship.',
    check: 'Ensuring you have a diversified and solid plan.',
    tips: ['Highlight different sources like savings + scholarship']
  },
  {
    id: 'f7',
    category: 'Financial Questions',
    icon: '💰',
    question: 'Do you have a scholarship?',
    answer: 'Yes, I received a merit-based scholarship from the university for my academic record.',
    check: 'Checking for academic merit and reduced financial risk.',
    tips: ['Even if it is small, emphasize it as an "award"']
  },
  {
    id: 'f8',
    category: 'Financial Questions',
    icon: '💰',
    question: 'Can you show bank statements?',
    answer: 'Yes, I have my official bank statements right here which show a sufficient balance for my first year.',
    check: 'Hard verification of the liquid funds mentioned.',
    tips: ['Organize documents so you can find them in 3 seconds']
  },
  {
    id: 'f9',
    category: 'Financial Questions',
    icon: '💰',
    question: 'Can you show financial documents (tax returns)?',
    answer: 'Yes, I have the certified tax returns and business proof for my sponsor as proof of stable income.',
    check: 'Deeper verification of the legality of the money.',
    tips: ['Bring originals and clear copies']
  },
  {
    id: 'f10',
    category: 'Financial Questions',
    icon: '💰',
    question: 'How will you cover remaining costs?',
    answer: 'The remaining balance beyond my scholarship will be covered by my family’s stable annual income.',
    check: 'Ensuring you have a plan for years 2, 3, and 4 as well.',
    tips: ['Show that the income is on-going']
  },

  // FUTURE PLANS & INTENT
  {
    id: 'i1',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'What are your plans after graduation?',
    answer: 'I intend to return home to join my local industry and apply the specialized skills I learned abroad.',
    check: 'Testing for "Non-Immigrant Intent"—do you plan to return home?',
    tips: ['Have a specific job title or company in mind back home']
  },
  {
    id: 'i2',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Do you plan to return to your home country?',
    answer: 'Absolutely. My goal is to use my education to improve my community, which requires my presence at home.',
    check: 'The most important question. They need to hear a firm "Yes".',
    tips: ['Explain the "Local Value" of your US degree']
  },
  {
    id: 'i3',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Why not study in your home country?',
    answer: 'Local universities are good, but they lack the specific laboratory facilities that are critical for my niche field.',
    check: 'Checking if you appreciate US education vs just wanting to move.',
    tips: ['Be respectful to local schools while praising US labs']
  },
  {
    id: 'i4',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Why not study in another country (Canada, UK, etc.)?',
    answer: 'The US offers a specific training style and research focus that other systems do not provide for my major.',
    check: 'Testing if you chose the US methodically.',
    tips: ['Mention a specific difference in teaching styles']
  },
  {
    id: 'i5',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Do you have relatives in the US?',
    answer: 'I answer correctly based on my status. I am focused on my studies and building my campus network.',
    check: 'Checking for potential immigration patterns.',
    tips: ['ALWAYS tell the truth—they already have this data']
  },
  {
    id: 'i6',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Have you been to the US before?',
    answer: 'I answer truthfully based on my travel history and any previous visa compliance.',
    check: 'Checking your travel history and compliance with past visas.',
    tips: ['Keep the description of past visits brief']
  },
  {
    id: 'i7',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'Will you work in the US after graduation?',
    answer: 'I will return home after I finish. If eligible for OPT, I may gain practical experience first, then return home.',
    check: 'Checking for intent to permanently work in the US.',
    tips: ['Focus on the "Return" as the ultimate goal']
  },
  {
    id: 'i8',
    category: 'Future Plans & Intent',
    icon: '🏠',
    question: 'What career do you plan to pursue?',
    answer: 'I aim to become a professional in my field, focusing on specialized skills to help grow my local sector.',
    check: 'Checking for a professional, goal-oriented mindset.',
    tips: ['Be ambitious but realistic']
  },

  // PERSONAL BACKGROUND
  {
    id: 'b1',
    category: 'Personal Background',
    icon: '⚠️',
    question: 'What have you been doing recently?',
    answer: 'I have been working and studying while preparing my applications and improving my technical skills.',
    check: 'Checking for "Gaps"—are you being productive?',
    tips: ['Avoid saying "just staying home"']
  },
  {
    id: 'b2',
    category: 'Personal Background',
    icon: '⚠️',
    question: 'Who is your current employer?',
    answer: 'I am currently employed at my organization where I work in a professional role.',
    check: 'Verification of your current status.',
    tips: ['Know your start date and job responsibilities']
  },
  {
    id: 'b3',
    category: 'Personal Background',
    icon: '⚠️',
    question: 'What do you do?',
    answer: 'My daily responsibilities include key professional tasks which have helped me develop my skills.',
    check: 'Testing the legitimacy of your work history.',
    tips: ['Describe your impact, not just a list of tasks']
  },
  {
    id: 'b4',
    category: 'Personal Background',
    icon: '⚠️',
    question: 'Can you show your diploma?',
    answer: 'Certainly, here is my original official diploma and transcripts for your review.',
    check: 'Hard verification of your academic credentials.',
    tips: ['Keep them in a plastic folder to prevent damage']
  },
  {
    id: 'b5',
    category: 'Personal Background',
    icon: '⚠️',
    question: 'How will you adjust to US culture?',
    answer: 'I am proactive about cross-cultural learning and plan to join campus organizations to integrate smoothly.',
    check: 'Assessing your social and mental adaptability.',
    tips: ['Show excitement to contribute to the community']
  },

  // FAMILY & BACKGROUND questions
  {
    id: 'fb1',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'Do you have siblings? What do they do?',
    answer: 'Yes, I have my siblings who are currently working and studying in Ethiopia, contributing to their respective fields.',
    check: 'Stability and family ties within your home country.',
    tips: ['Mention their positive contributions to the local community']
  },
  {
    id: 'fb2',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'Where do your parents live?',
    answer: 'My parents reside in Ethiopia, where they have been established for many years.',
    check: 'Verifying your deep-rooted family ties to your home country.',
    tips: ['Mention the city and perhaps their involvement in the community']
  },
  {
    id: 'fb3',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'What do your parents do?',
    answer: 'My father and mother both lead successful professional lives, ensuring a stable upbringing for our family.',
    check: 'Financial consistency and family stability.',
    tips: ['Summarize their professional roles clearly']
  },
  {
    id: 'fb4',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'What is your family’s financial situation?',
    answer: 'My family has a stable financial standing with multiple income streams, ensuring they can fully support my education.',
    check: 'Ensuring there is enough wealth to sustain your US education.',
    tips: ['Focus on "Stability" and "Growth"']
  },
  {
    id: 'fb5',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'How will your family support your education?',
    answer: 'My family has dedicated savings specifically for my university degree and will use their monthly income for my expenses.',
    check: 'Commitment to your education from your primary sponsors.',
    tips: ['Show that they are invested in your future']
  },
  {
    id: 'fb6',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'Do you have relatives in the US?',
    answer: 'I answer truthfully based on my documented status. My primary focus remains on my academic program.',
    check: 'Checking for potential immigration intent through family paths.',
    tips: ['Always be honest—it must match your DS-160 data']
  },
  {
    id: 'fb7',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'Do you have any relatives in your university?',
    answer: 'No, I chose this university independently based on the strength of the program for my specific major.',
    check: 'Checking if you are following family instead of academic merit.',
    tips: ['Highlight your independent choice of this specific program']
  },
  {
    id: 'fb8',
    category: 'Family & Background Questions',
    icon: '👨‍👩‍👧',
    question: 'Do you or your family have any criminal record?',
    answer: 'No, I have no legal issues or criminal records, and neither do my parents.',
    check: 'Security clearance and personal integrity.',
    tips: ['Answer directly with a firm No']
  },

  // WORK & EXPERIENCE
  {
    id: 'w1',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Are you currently working?',
    answer: 'Yes, I am currently employed in a professional role where I have gained valuable industry experience.',
    check: 'Professional stability and career progression.',
    tips: ['If you aren\'t working, mention recent graduation or projects']
  },
  {
    id: 'w2',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Who is your employer?',
    answer: 'I work for my current organization, which is a respected entity in its respective sector.',
    check: 'Legitimacy of your professional background.',
    tips: ['State the company name clearly']
  },
  {
    id: 'w3',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'What do you do?',
    answer: 'My role involves key professional responsibilities that have prepared me for advanced specialized study.',
    check: 'Assessing your skill level and professional value.',
    tips: ['Focus on "Skill Building" that leads to your US major']
  },
  {
    id: 'w4',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'What is your salary?',
    answer: 'My salary is consistent with my role and reflects my professional standing in the local market.',
    check: 'Verification of financial status and ties to home employment.',
    tips: ['Know your Net vs Gross income if possible']
  },
  {
    id: 'w5',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Do you have savings?',
    answer: 'Yes, I have managed my finances responsibly and have personal savings to support my time abroad.',
    check: 'Financial maturity and preparedness.',
    tips: ['Show that you are self-reliant in addition to your sponsor']
  },
  {
    id: 'w6',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Why leave your job to study?',
    answer: 'I have reached a point where advanced US training is necessary to reach the next leadership stage in my career.',
    check: 'Checking if your academic goals are a logical choice or an exit strategy.',
    tips: ['Explain why "Now" is the perfect time for growth']
  },
  {
    id: 'w7',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Can you show your work experience documents?',
    answer: 'Certainly, I have my official employment letters and professional records for your verification.',
    check: 'Hard verification of professional claims.',
    tips: ['Organize these chronologically in your folder']
  },
  {
    id: 'w8',
    category: 'Work & Experience Questions',
    icon: '💼',
    question: 'Do you plan to work while studying?',
    answer: 'My focus is 100% on my academics. While I may consider on-campus roles, I am already fully funded for my education.',
    check: 'Ensuring you aren\'t planning to work illegally or rely on part-time wages.',
    tips: ['NEVER rely on part-time work as your main funding source']
  },

  // ADVANCED / PSYCHOLOGICAL questions
  {
    id: 'p1',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'Do you plan to immigrate or return home?',
    answer: 'I plan to return home to apply my skills to my local industry’s development.',
    check: 'The core of the F-1 visa: Non-Immigrant Intent.',
    tips: ['Be firm and clear about "Returning"']
  },
  {
    id: 'p2',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'How can you prove you will return?',
    answer: 'I have deep family ties, assets, and a clear career path that uniquely benefits from this US degree back in Ethiopia.',
    check: 'Evidence of "Home Ties".',
    tips: ['Mention family, property, or a waiting job offer']
  },
  {
    id: 'p3',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'What are your long-term goals?',
    answer: 'I aim to become a leader in my specialized sector at home, driving innovation and creating new local opportunities.',
    check: 'Clarity of vision and long-term ambition.',
    tips: ['Focus on the "Impact" you will make at home']
  },
  {
    id: 'p4',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'What if your visa is rejected?',
    answer: 'I would analyze the reason and attempt to address it for a future application. My goal remains to get the best education.',
    check: 'Testing your emotional maturity and "non-desperation".',
    tips: ['Stay calm. This is a possibility, not a disaster']
  },
  {
    id: 'p5',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'Why do you deserve this visa?',
    answer: 'Because I am a qualified student with a clear purpose, strong funding, and a commitment to return to my country.',
    check: 'Confidence and self-worth as a candidate.',
    tips: ['Be confident but humble']
  },
  {
    id: 'p6',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'Why did you get this scholarship?',
    answer: 'The university recognized my academic merit and the potential impact I could have within their campus and my home sector.',
    check: 'Validating the "Merit" of your award.',
    tips: ['Be proud. Highlight specific achievements']
  },
  {
    id: 'p7',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'Why did you change your field?',
    answer: 'My interests evolved as I saw a greater need and opportunity for leadership in my new chosen major.',
    check: 'Checking if the change is methodical or random.',
    tips: ['Explain the "Link" between old and new experiences']
  },
  {
    id: 'p8',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'What are your expectations after graduation?',
    answer: 'I expect to return home as an expert in my field, ready to modernize and innovate within my home country.',
    check: 'Testing if your expectations are realistic.',
    tips: ['Focus on skill-building results']
  },
  {
    id: 'p9',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'What do you know about the US education system?',
    answer: 'It is highly collaborative, research-driven, and emphasizes critical thinking applied to practical problems.',
    check: 'Checking if you understand the environment you are entering.',
    tips: ['Mention "Critical Thinking" and "Hands-on Learning"']
  },
  {
    id: 'p10',
    category: 'Advanced / Psychological Questions',
    icon: '🧠',
    question: 'Why do you like the US?',
    answer: 'I admire the US for its academic excellence, its culture of innovation, and its world-class research facilities.',
    check: 'Checking for general sincerity and intent.',
    tips: ['Focus on "Values" and "Innovation"']
  }
];

const SUCCESS_GUIDE = {
  dos: [
    'Be calm and confident',
    'Answer clearly and honestly',
    'Know your financial plan perfectly',
    'Be consistent with your documentation',
    'Stay focused on your educational purpose'
  ],
  donts: [
    'Do NOT lie (it leads to permanent bans)',
    'Do NOT give inconsistent answers',
    'Do NOT sound like you memorized answers',
    'Do NOT depend on part-time jobs for funding',
    'Do NOT panic or show extreme desperation'
  ]
};

const APPEARANCE_GUIDE = {
  men: ['Clean shirt or simple suit', 'Neutral colors (Black, Navy, Gray)', 'Polished shoes'],
  women: ['Professional outfit', 'Simple and neat hair/makeup', 'Minimal accessories']
};

const SuccessSection = () => {
  const theme = useAppTheme();
  return (
    <View style={styles.guideContainer}>
      <View style={styles.sectionHeader}>
        <View style={[styles.categoryIconBox, { backgroundColor: '#4CAF50' + '15' }]}>
          <Text style={styles.categoryIcon}>✅</Text>
        </View>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Interview Success Guide</Text>
      </View>
      
      <View style={[styles.dosContainer, { backgroundColor: '#4CAF50' + '08', borderColor: '#4CAF50' + '30' }]}>
        <Text style={[styles.guideTitle, { color: '#2E7D32' }]}>THE DO'S</Text>
        {SUCCESS_GUIDE.dos.map((item, idx) => (
          <View key={idx} style={styles.guideItem}>
            <View style={[styles.guideCheck, { backgroundColor: '#4CAF50' }]} />
            <Text style={[styles.guideText, { color: theme.colors.text }]}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.dosContainer, { backgroundColor: '#F44336' + '08', borderColor: '#F44336' + '30', marginTop: 16 }]}>
        <Text style={[styles.guideTitle, { color: '#D32F2F' }]}>THE DON'TS</Text>
        {SUCCESS_GUIDE.donts.map((item, idx) => (
          <View key={idx} style={styles.guideItem}>
            <View style={[styles.guideCheck, { backgroundColor: '#F44336' }]} />
            <Text style={[styles.guideText, { color: theme.colors.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const AppearanceSection = () => {
  const theme = useAppTheme();
  return (
    <View style={[styles.guideContainer, { marginTop: 32 }]}>
      <View style={styles.sectionHeader}>
        <View style={[styles.categoryIconBox, { backgroundColor: theme.colors.primary + '15' }]}>
          <Text style={styles.categoryIcon}>👔</Text>
        </View>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Appearance & Behavior</Text>
      </View>
      
      <View style={[styles.appearanceCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
        <Text style={[styles.appearanceRule, { color: theme.colors.primary }]}>GENERAL RULE: Look clean, simple, and serious.</Text>
        
        <View style={styles.genderRow}>
          <View style={styles.genderCol}>
            <Text style={[styles.genderTitle, { color: theme.colors.text }]}>👨 FOR MEN</Text>
            {APPEARANCE_GUIDE.men.map((item, idx) => (
              <Text key={idx} style={[styles.genderText, { color: theme.colors.textSecondary }]}>• {item}</Text>
            ))}
          </View>
          <View style={styles.genderCol}>
            <Text style={[styles.genderTitle, { color: theme.colors.text }]}>👩 FOR WOMEN</Text>
            {APPEARANCE_GUIDE.women.map((item, idx) => (
              <Text key={idx} style={[styles.genderText, { color: theme.colors.textSecondary }]}>• {item}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

interface Props {
  onBack: () => void;
}

export const VisaQAScreen = ({ onBack }: Props) => {
  const theme = useAppTheme();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const categories = [
    { title: 'Study & Academic Questions', icon: '🎓' },
    { title: 'University & Application Questions', icon: '🏫' },
    { title: 'Financial Questions', icon: '💰' },
    { title: 'Future Plans & Intent', icon: '🏠' },
    { title: 'Personal Background', icon: '⚠️' },
    { title: 'Family & Background Questions', icon: '👨‍👩‍👧' },
    { title: 'Work & Experience Questions', icon: '💼' },
    { title: 'Advanced / Psychological Questions', icon: '🧠' }
  ];

  const filteredData = VISA_QUESTION_BANK.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top']}>
      {/* Premium Expandable Header */}
      <View style={styles.header}>
        {!isSearchActive ? (
          <>
            <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={onBack}>
              <ChevronLeft color={theme.colors.text} size={28} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Interview Q&A</Text>
              <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>
                Master your embassy interview
              </Text>
            </View>
            <TouchableOpacity 
              style={[styles.iconBtn, { backgroundColor: theme.colors.card }]} 
              onPress={() => setIsSearchActive(true)}
              activeOpacity={0.8}
            >
              <Search color={theme.colors.text} size={20} />
            </TouchableOpacity>
          </>
        ) : (
          <View style={[styles.searchActiveContainer, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
            <Search color={theme.colors.textSecondary} size={18} />
            <TextInput
              autoFocus
              style={[styles.headerSearchInput, { color: theme.colors.text }]}
              placeholder="Search..."
              placeholderTextColor={theme.colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity 
              onPress={() => {
                setIsSearchActive(false);
                setSearchQuery('');
              }}
              style={styles.closeSearchBtn}
            >
              <X color={theme.colors.textSecondary} size={20} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {categories.map((cat, idx) => {
          const items = filteredData.filter(i => i.category === cat.title);
          if (items.length === 0) return null;

          return (
            <View key={idx} style={idx > 0 ? { marginTop: 28 } : undefined}>
              <View style={styles.sectionHeader}>
                <View style={[styles.categoryIconBox, { backgroundColor: theme.colors.primary + '12' }]}>
                  <Text style={styles.categoryIcon}>{cat.icon}</Text>
                </View>
                <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{cat.title}</Text>
              </View>
              {items.map(item => (
                <AccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  tips={item.tips}
                  check={item.check}
                  isOpen={expandedId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </View>
          );
        })}

        {filteredData.length === 0 && searchQuery.length > 0 && (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
              No results found for "{searchQuery}"
            </Text>
          </View>
        )}

        {searchQuery.length === 0 && (
          <>
            <SuccessSection />
            <AppearanceSection />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    minHeight: 80,
  },
  backBtn: {
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchActiveContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    gap: 12,
  },
  headerSearchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  closeSearchBtn: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  categoryIconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  cardContainer: {
    borderRadius: 24,
    marginBottom: 16,
    borderWidth: 1,
    ...baseTheme.shadows.light,
    shadowOpacity: 0.05,
    elevation: 2,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  questionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    paddingRight: 16,
    lineHeight: 24,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 0,
    borderTopWidth: 1,
  },
  answerLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 12,
  },
  answerText: {
    fontSize: 16,
    lineHeight: 26,
    fontStyle: 'italic',
    fontWeight: '600',
    marginBottom: 24,
  },
  checkContainer: {
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: baseTheme.colors.primary,
  },
  checkLabel: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 6,
  },
  checkText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    opacity: 0.9,
  },
  tipBoxContainer: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  tipTitle: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 10,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '500',
  },
  guideContainer: {
    marginTop: 32,
  },
  dosContainer: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
  guideTitle: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 16,
  },
  guideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 12,
  },
  guideCheck: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  guideText: {
    fontSize: 14,
    fontWeight: '600',
  },
  appearanceCard: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
  appearanceRule: {
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 20,
  },
  genderCol: {
    flex: 1,
  },
  genderTitle: {
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 10,
  },
  genderText: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: 4,
  },
});
