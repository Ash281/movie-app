import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface EmailAddress {
  email_address: string;
  id: string;
  linked_to: string;
  object: string;
  reserved: boolean;
  verication: object;
}

interface WebhookData {
  created_at: number;
  updated_at: number;
  birthday: string;
  // Add other fields as needed
  email_addresses: EmailAddress[];
  first_name: string;
  gender: string;
  has_image: boolean;
  id: string;
  image_url: string;
  last_active_at: number;
  last_name: string;
  last_sign_in_at: number;
  username: string;
  clerkId: string;
}

async function handleWebhookEvent(webhookBody: any) {
  // console.log(JSON.stringify(webhookBody));
  const type = webhookBody.type
  const data = webhookBody.data;
  console.log(data)
  if (type === 'user.updated' || type === 'user.created') {
    const userData: WebhookData = data;
    const email_data = userData.email_addresses[0];
    // console.log(email_data.email_address)
    // Convert the data to match your Prisma User model
    const userToUpdate = {
      email: email_data.email_address, // Assuming there's at least one email address
      name: `${userData.first_name} ${userData.last_name}`,
      createdAt: new Date(userData.created_at),
      updatedAt: new Date(userData.updated_at),
      clerkId: userData.id, // Adjust based on your data structure
    };

    // Update or create user in the database
    if (type === 'user.updated') {
      await prisma.user.update({
        where: { clerkId: userData.id },
        data: userToUpdate,
      });
    }

    else if (type === 'user.created') {
        await prisma.user.create({
            data: userToUpdate,
        });
        }
  } 
  else if (type === 'user.deleted') {
    const userId = data.id;

    // Delete user from the database
    await prisma.user.delete({
      where: { clerkId: userId },
    });
  }
}

export default handleWebhookEvent;