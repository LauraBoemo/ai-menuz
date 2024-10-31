interface HandleS3DeleteProps {
  url: string;
}

// TODO: Review
export const handleS3Delete = async ({ url }: HandleS3DeleteProps): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/delete`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to delete the image: ${errorText}`);
  }
}

export default handleS3Delete;
