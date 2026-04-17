<<<<<<< HEAD

import ChatUI from "../../components/ChatUI";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ botId: string }>;
}) {
  const { botId } = await params;

  return <ChatUI botId={botId} />;
}
=======
// app/chat/[botId]/page.tsx
import ChatUI from "../../components/ChatUI";

export default function ChatPage({ params }: { params: { botId: string } }) {
  return <ChatUI botId={params.botId} />;
}
>>>>>>> 43a2b4ea611d136390df66cebec521ca3fdc353c
