import React, { useState } from "react";
import { Search } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";

const MessageList = ({ messages, onSelectUser, selectedUser, searchTerm }) => {
  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {filteredMessages.map((message, index) => (
        <div
          key={index}
          className={`flex items-center p-4 cursor-pointer border-b ${
            selectedUser?.name === message.name
              ? "bg-blue-50 border-l-4 border-l-primary"
              : "hover:bg-gray-50"
          }`}
          onClick={() => onSelectUser(message)}
        >
          <img
            src={message.avatar}
            alt={message.name}
            className="w-12 h-12 rounded-full ml-4"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{message.name}</h3>
            <p className="text-sm text-gray-600 truncate">
              {message.lastMessage}
            </p>
          </div>
          <span className="text-xs text-gray-400">{message.time}</span>
        </div>
      ))}
    </div>
  );
};

const ChatWindow = ({ selectedUser }) => (
  <div className="flex flex-col h-full bg-white">
    <div className="bg-white p-4 flex items-center justify-between border-b">
      <div className="flex items-center">
        <img
          src={selectedUser.avatar}
          alt={selectedUser.name}
          className="w-12 h-12 rounded-full ml-4"
        />
        <div>
          <h2 className="font-semibold text-lg">{selectedUser.name}</h2>
          <p className="text-sm text-gray-500">مستشار مالي</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {selectedUser.messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] p-4 rounded-lg ${
              message.sender === "user" ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs text-gray-500 mt-1 block">
              {message.time}
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-white p-4 flex items-center border-t">
      <input
        type="text"
        placeholder="اكتب رسالتك"
        className="flex-1 border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button className="mr-4 text-primary hover:text-primary-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </div>
  </div>
);

const DashboardMessagesWhatsapp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [messages] = useState([
    {
      name: "زياد وليد",
      avatar: "https://i.pravatar.cc/150?img=8",
      lastMessage: "اهلا وسهلا بك اخي هل يمكنني الاستفسار عن شيء",
      time: "منذ 5 دقائق",
      messages: [
        {
          sender: "other",
          text: "اهلا وسهلا بك اخي هل يمكنني الاستفسار عن شيء",
          time: "10:30 AM",
        },
        {
          sender: "user",
          text: "اهلا بك يسعدني مساعدتك استاذ زياد",
          time: "10:32 AM",
        },
        {
          sender: "other",
          text: "اهلا وسهلا بك اخي هل يمكنني الاستفسار عن شيء",
          time: "10:35 AM",
        },
        {
          sender: "user",
          text: "اهلا بك يسعدني مساعدتك استاذ زياد",
          time: "10:37 AM",
        },
      ],
    },
    {
      name: "أحمد محمد",
      avatar: "https://i.pravatar.cc/150?img=11",
      lastMessage: "شكرا جزيلا على المساعدة",
      time: "منذ ساعة",
      messages: [
        {
          sender: "user",
          text: "مرحبا أحمد، كيف يمكنني مساعدتك؟",
          time: "9:00 AM",
        },
        { sender: "other", text: "شكرا جزيلا على المساعدة", time: "9:05 AM" },
      ],
    },
    {
      name: "سارة علي",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "موعدنا غدا في الساعة الثالثة",
      time: "منذ يومين",
      messages: [
        {
          sender: "other",
          text: "هل يمكننا تحديد موعد للاجتماع؟",
          time: "Yesterday, 2:30 PM",
        },
        {
          sender: "user",
          text: "بالتأكيد، ما رأيك في الغد الساعة الثالثة؟",
          time: "Yesterday, 2:45 PM",
        },
        {
          sender: "other",
          text: "موعدنا غدا في الساعة الثالثة",
          time: "Yesterday, 3:00 PM",
        },
      ],
    },
  ]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <DashboardHeader />
      <div className="flex-1 flex p-6 space-x-6 rtl:space-x-reverse">
        <div className="w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
          {selectedUser ? (
            <ChatWindow selectedUser={selectedUser} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              اختر محادثة لعرضها هنا
            </div>
          )}
        </div>
        <div className="w-1/3 bg-white rounded-lg shadow-md flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold">الرسائل</h2>
          </div>
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث هنا"
                className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <MessageList
            messages={messages}
            onSelectUser={setSelectedUser}
            selectedUser={selectedUser}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardMessagesWhatsapp;
