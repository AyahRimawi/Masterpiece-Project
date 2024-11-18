import React, { useState, useEffect } from "react";
import axios from "axios";
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [response, setResponse] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("/api/admin/messages");
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendResponse = async () => {
    if (!response.trim() || !selectedMessage) return;

    setSending(true);
    try {
      await axios.post(`/api/admin/messages/${selectedMessage._id}/respond`, {
        response,
      });

      // Update local state
      setMessages(
        messages.map((msg) =>
          msg._id === selectedMessage._id
            ? { ...msg, status: "responded" }
            : msg
        )
      );

      setResponse("");
      setSelectedMessage(null);
    } catch (error) {
      console.error("Error sending response:", error);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Messages List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Contact Messages</h2>
        </div>
        <div className="divide-y max-h-[calc(100vh-300px)] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message._id}
              onClick={() => setSelectedMessage(message)}
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedMessage?._id === message._id ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {message.status === "responded" ? (
                  <EnvelopeOpenIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <EnvelopeIcon className="w-5 h-5 text-gray-600" />
                )}
                <div className="flex-1">
                  <h3 className="font-medium">{message.name}</h3>
                  <p className="text-sm text-gray-600">{message.subject}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(message.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Details & Response */}
      <div className="bg-white rounded-lg shadow">
        {selectedMessage ? (
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">
                {selectedMessage.subject}
              </h2>
              <div className="text-sm text-gray-600 mt-1">
                From: {selectedMessage.name} ({selectedMessage.email})
              </div>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
            </div>

            {selectedMessage.status !== "responded" && (
              <div className="p-4 border-t">
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  placeholder="Type your response..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  rows={4}
                />
                <button
                  onClick={handleSendResponse}
                  disabled={sending || !response.trim()}
                  className="mt-3 bg-black text-white px-4 py-2 rounded-md disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Response"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a message to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
