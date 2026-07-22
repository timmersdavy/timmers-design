"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type RequestItem = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string | null;
  status: "NIEUW" | "INGEPLAND" | "AFGEHANDELD";
  createdAt: string;
};

const STATUS_LABELS: Record<RequestItem["status"], string> = {
  NIEUW: "Nieuw",
  INGEPLAND: "Ingepland",
  AFGEHANDELD: "Afgehandeld",
};

const STATUS_STYLES: Record<RequestItem["status"], string> = {
  NIEUW: "bg-amber-100 text-amber-800",
  INGEPLAND: "bg-blue-100 text-blue-800",
  AFGEHANDELD: "bg-green-100 text-green-800",
};

export default function RequestList({ requests }: { requests: RequestItem[] }) {
  const router = useRouter();
  const [pendingId, setPendingId] = useState<string | null>(null);

  async function updateStatus(id: string, status: RequestItem["status"]) {
    setPendingId(id);
    await fetch(`/api/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setPendingId(null);
    router.refresh();
  }

  if (requests.length === 0) {
    return <p className="text-gray-500">Nog geen aanvragen.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Datum</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Naam</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Contact</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Dienst</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Bericht</th>
            <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {requests.map((r) => (
            <tr key={r.id}>
              <td className="whitespace-nowrap px-4 py-3 text-gray-500">
                {new Date(r.createdAt).toLocaleDateString("nl-BE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="whitespace-nowrap px-4 py-3 font-medium">{r.name}</td>
              <td className="px-4 py-3 text-gray-600">
                <div>{r.phone}</div>
                <div className="text-gray-400">{r.email}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-3">{r.service}</td>
              <td className="max-w-xs px-4 py-3 text-gray-600">{r.message || "—"}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <select
                  value={r.status}
                  disabled={pendingId === r.id}
                  onChange={(e) =>
                    updateStatus(r.id, e.target.value as RequestItem["status"])
                  }
                  className={`rounded-full border-0 px-2 py-1 text-xs font-medium ${STATUS_STYLES[r.status]}`}
                >
                  {(Object.keys(STATUS_LABELS) as RequestItem["status"][]).map(
                    (s) => (
                      <option key={s} value={s}>
                        {STATUS_LABELS[s]}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
