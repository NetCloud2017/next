import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import SidebarnoteItemHeader from "@/components/SidebarNoteItemHeader";

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = "", updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarnoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
