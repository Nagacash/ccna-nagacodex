"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const quizQuestions = [
  {
    id: 1,
    question: "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: [
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)"
    ],
    correctAnswer: 1,
    explanation: "The Network Layer (Layer 3) is responsible for logical addressing (IP addresses) and determining the route from the source to the destination."
  },
  {
    id: 2,
    question: "Which protocol operates at the Transport Layer and provides connection-oriented, reliable data delivery?",
    options: [
      "IP (Internet Protocol)",
      "UDP (User Datagram Protocol)",
      "TCP (Transmission Control Protocol)",
      "ICMP (Internet Control Message Protocol)"
    ],
    correctAnswer: 2,
    explanation: "TCP (Transmission Control Protocol) operates at the Transport Layer (Layer 4) and provides connection-oriented, reliable data delivery with features like sequencing, acknowledgments, and flow control."
  },
  {
    id: 3,
    question: "What is the subnet mask for a /27 network?",
    options: [
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224"
    ],
    correctAnswer: 3,
    explanation: "A /27 network has 27 bits in the network portion, which means the subnet mask is 255.255.255.224 (11111111.11111111.11111111.11100000 in binary)."
  },
  {
    id: 4,
    question: "Which of the following is NOT a private IP address range?",
    options: [
      "10.0.0.0/8",
      "172.16.0.0/12",
      "192.168.0.0/16",
      "172.32.0.0/16"
    ],
    correctAnswer: 3,
    explanation: "The private IP address ranges are: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 to 172.31.255.255), and 192.168.0.0/16. 172.32.0.0/16 is not a private IP address range."
  },
  {
    id: 5,
    question: "Which switching technology reduces the size of a broadcast domain?",
    options: [
      "VLANs (Virtual Local Area Networks)",
      "STP (Spanning Tree Protocol)",
      "Port Security",
      "EtherChannel"
    ],
    correctAnswer: 0,
    explanation: "VLANs (Virtual Local Area Networks) reduce the size of broadcast domains by segmenting a single physical network into multiple logical networks."
  },
  {
    id: 6,
    question: "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    options: [
      "To provide encryption for data transmission",
      "To prevent routing loops in networks with redundant paths",
      "To prevent switching loops in networks with redundant paths",
      "To optimize bandwidth usage in a network"
    ],
    correctAnswer: 2,
    explanation: "The primary purpose of the Spanning Tree Protocol (STP) is to prevent switching loops in networks with redundant paths by placing certain switch ports in a blocking state."
  },
  {
    id: 7,
    question: "Which command would you use to view the routing table on a Cisco router?",
    options: [
      "show ip route",
      "show routes",
      "display ip routes",
      "list routing-table"
    ],
    correctAnswer: 0,
    explanation: "The 'show ip route' command is used to view the routing table on a Cisco router, displaying all known routes and how they were learned."
  },
  {
    id: 8,
    question: "Which routing protocol uses bandwidth and delay as metrics for path selection by default?",
    options: [
      "RIP (Routing Information Protocol)",
      "OSPF (Open Shortest Path First)",
      "EIGRP (Enhanced Interior Gateway Routing Protocol)",
      "BGP (Border Gateway Protocol)"
    ],
    correctAnswer: 2,
    explanation: "EIGRP (Enhanced Interior Gateway Routing Protocol) uses bandwidth and delay as its default metrics for path selection, though it can also consider reliability, load, and MTU."
  },
  {
    id: 9,
    question: "What is the purpose of NAT (Network Address Translation)?",
    options: [
      "To encrypt network traffic",
      "To conserve public IP addresses by allowing multiple devices to share a single public IP",
      "To increase network performance",
      "To filter unwanted traffic"
    ],
    correctAnswer: 1,
    explanation: "The primary purpose of NAT (Network Address Translation) is to conserve public IP addresses by allowing multiple devices on a private network to share a single public IP address for internet access."
  },
  {
    id: 10,
    question: "Which of the following is a link-state routing protocol?",
    options: [
      "RIP",
      "EIGRP",
      "OSPF",
      "BGP"
    ],
    correctAnswer: 2,
    explanation: "OSPF (Open Shortest Path First) is a link-state routing protocol that builds a complete topology map of the network and then calculates the shortest path to each destination."
  },
  {
    id: 11,
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Domain Host Control Protocol",
      "Dynamic Host Control Program",
      "Distributed Host Configuration Protocol"
    ],
    correctAnswer: 0,
    explanation: "DHCP stands for Dynamic Host Configuration Protocol. It's used to automatically assign IP addresses and other network configuration parameters to devices on a network."
  },
  {
    id: 12,
    question: "Which of the following is NOT a valid IPv6 address representation?",
    options: [
      "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
      "2001:db8:85a3::8a2e:370:7334",
      "2001:db8:85a3:0:0:8a2e:0370:7334",
      "2001::db8:85a3::8a2e:0370:7334"
    ],
    correctAnswer: 3,
    explanation: "2001::db8:85a3::8a2e:0370:7334 is not valid because the double colon (::) can only appear once in an IPv6 address, as it represents an unspecified number of zero groups."
  },
  {
    id: 13,
    question: "Which wireless security protocol is considered the most secure for enterprise networks?",
    options: [
      "WEP",
      "WPA-Personal",
      "WPA2-Personal",
      "WPA2-Enterprise"
    ],
    correctAnswer: 3,
    explanation: "WPA2-Enterprise is considered the most secure wireless security protocol for enterprise networks as it uses 802.1X authentication with a RADIUS server and provides stronger encryption than WEP, WPA-Personal, or WPA2-Personal."
  },
  {
    id: 14,
    question: "What is the primary function of a router?",
    options: [
      "To connect multiple devices within the same network",
      "To forward packets between different networks",
      "To provide wireless connectivity",
      "To assign IP addresses to devices"
    ],
    correctAnswer: 1,
    explanation: "The primary function of a router is to forward packets between different networks based on network layer (Layer 3) information, specifically IP addresses."
  },
  {
    id: 15,
    question: "Which protocol is used to resolve IP addresses to MAC addresses in IPv4?",
    options: [
      "DNS",
      "DHCP",
      "ARP",
      "ICMP"
    ],
    correctAnswer: 2,
    explanation: "ARP (Address Resolution Protocol) is used to resolve IP addresses to MAC addresses in IPv4 networks, allowing devices to determine the hardware address of a device on the same network."
  },
  {
    id: 16,
    question: "What is the maximum transmission unit (MTU) of a standard Ethernet frame?",
    options: [
      "1000 bytes",
      "1500 bytes",
      "1800 bytes",
      "2000 bytes"
    ],
    correctAnswer: 1,
    explanation: "The maximum transmission unit (MTU) of a standard Ethernet frame is 1500 bytes, which represents the maximum payload size that can be carried in a single Ethernet frame."
  },
  {
    id: 17,
    question: "Which of the following is a characteristic of UDP?",
    options: [
      "Connection-oriented",
      "Guaranteed delivery",
      "Flow control",
      "Connectionless"
    ],
    correctAnswer: 3,
    explanation: "UDP (User Datagram Protocol) is connectionless, meaning it does not establish a connection before sending data and does not guarantee delivery, provide flow control, or sequence packets."
  },
  {
    id: 18,
    question: "What type of address is FF02::1?",
    options: [
      "IPv6 unicast address",
      "IPv6 anycast address",
      "IPv6 multicast address",
      "IPv6 broadcast address"
    ],
    correctAnswer: 2,
    explanation: "FF02::1 is an IPv6 multicast address. Specifically, it's the all-nodes link-local multicast address, which is the IPv6 equivalent of the IPv4 broadcast address for the local network."
  },
  {
    id: 19,
    question: "Which command would you use to save the running configuration to the startup configuration on a Cisco device?",
    options: [
      "save running-config",
      "copy running-config startup-config",
      "write memory",
      "Both B and C are correct"
    ],
    correctAnswer: 3,
    explanation: "Both 'copy running-config startup-config' and 'write memory' commands can be used to save the running configuration to the startup configuration on a Cisco device."
  },
  {
    id: 20,
    question: "What is the purpose of HSRP (Hot Standby Router Protocol)?",
    options: [
      "To load balance traffic across multiple routers",
      "To provide redundancy for the default gateway in a network",
      "To encrypt router-to-router communication",
      "To dynamically assign IP addresses to routers"
    ],
    correctAnswer: 1,
    explanation: "HSRP (Hot Standby Router Protocol) provides redundancy for the default gateway in a network by allowing multiple routers to share a virtual IP address, ensuring that if the primary router fails, another router can take over without disrupting network connectivity."
  }
];

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Quiz Complete!</h2>
            <p className="text-xl mb-6">
              You scored {score} out of {quizQuestions.length} questions ({Math.round((score / quizQuestions.length) * 100)}%)
            </p>
            {score / quizQuestions.length >= 0.8 ? (
              <p className="text-green-600 font-semibold mb-6">Great job! You're well prepared for the CCNA exam!</p>
            ) : score / quizQuestions.length >= 0.6 ? (
              <p className="text-yellow-600 font-semibold mb-6">Good effort! Review the topics you missed and try again.</p>
            ) : (
              <p className="text-red-600 font-semibold mb-6">You might need more study time. Review the CCNA materials and try again.</p>
            )}
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-900">CCNA Practice Quiz</h2>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Question {currentQuestion + 1}/{quizQuestions.length}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    className={`w-full text-left p-3 rounded-md border transition-colors ${
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    } ${
                      showExplanation && index === quizQuestions[currentQuestion].correctAnswer && selectedAnswer !== index
                        ? 'bg-green-50 border-green-500'
                        : ''
                    }`}
                    disabled={showExplanation}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"
              >
                <h4 className="font-semibold text-blue-900 mb-1">Explanation:</h4>
                <p>{quizQuestions[currentQuestion].explanation}</p>
              </motion.div>
            )}
            
            <div className="flex justify-end">
              {showExplanation && (
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
