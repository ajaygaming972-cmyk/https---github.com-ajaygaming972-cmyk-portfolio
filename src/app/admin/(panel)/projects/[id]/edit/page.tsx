import ProjectForm from '@/app/admin/components/ProjectForm';
export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <ProjectForm mode="edit" projectId={id} />; }
