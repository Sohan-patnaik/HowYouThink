// app/chat/[botId]/page.tsx
import ChatUI from "../../components/ChatUI";

export default function ChatPage({ params }: { params: { botId: string } }) {
  return <ChatUI botId={params.botId} />;
}
