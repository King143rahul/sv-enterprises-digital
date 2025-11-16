import { useParams, useNavigate } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useToast } from "@/hooks/use-toast";

const LeadDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data
  const lead = {
    id: 1,
    name: "Rajesh Kumar",
    phone: "9876543210",
    email: "rajesh@example.com",
    type: "Car",
    vehicle: "KA-01-AB-1234",
    message: "Looking for comprehensive insurance for my new car",
    date: "2025-11-15",
    status: "New",
  };

  const handleMarkContacted = () => {
    toast({
      title: "Lead Updated",
      description: "Lead marked as contacted",
    });
  };

  const handleDelete = () => {
    toast({
      title: "Lead Deleted",
      description: "The lead has been removed",
      variant: "destructive",
    });
    navigate("/admin/leads");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin/leads")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-semibold">Lead Details</h1>
            <p className="text-muted-foreground">View and manage lead information</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Name</p>
                <p className="font-medium">{lead.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">{lead.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">{lead.email}</p>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" asChild>
                  <a href={`tel:${lead.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://wa.me/91${lead.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Insurance Type</p>
                <p className="font-medium">{lead.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Vehicle Number</p>
                <p className="font-medium">{lead.vehicle}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Date Submitted</p>
                <p className="font-medium">{lead.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="font-medium">{lead.status}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Message</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{lead.message}</p>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleMarkContacted}>Mark as Contacted</Button>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Lead
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LeadDetail;
