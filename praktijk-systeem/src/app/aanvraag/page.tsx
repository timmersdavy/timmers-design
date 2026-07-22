import RequestForm from "./RequestForm";

export default function AanvraagPage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">Vraag een afspraak aan</h1>
      <p className="text-gray-600 mb-6">
        Vul het formulier in en we nemen zo snel mogelijk contact met je op.
      </p>
      <RequestForm />
    </main>
  );
}
