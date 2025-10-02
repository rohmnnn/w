import { BackgroundLines } from "~/components/aceternity/ui/background-lines";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Logo from "~/components/logo";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
	email: z.string().min(2, {
		message: "email must be at least 2 characters.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	}),
});

export default function LoginPage() {
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof loginFormSchema>) {
		console.log(values);
	}
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="bg-black relative hidden lg:block border-r border-gray-200 dark:border-gray-700">
				<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
					<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
						Jurnalbijak.com
					</h2>
					<p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
						Manage your business finances easily, automatically, and
						securely; complete tax reports hassle-free and boost
						efficiency today, try it free now!
					</p>
				</BackgroundLines>
			</div>
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<a href="#" className="flex items-center gap-2 font-medium">
						<Logo className="h-8 w-auto" />
					</a>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8"
							>
								<div className="flex flex-col items-center gap-2 text-center">
									<h1 className="text-2xl font-bold">
										Login to your account
									</h1>
									<p className="text-muted-foreground text-sm text-balance">
										Enter your email below to login to your
										account
									</p>
								</div>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="accounting@company.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<div className="flex items-center">
												<Label htmlFor="password">
													Password
												</Label>
												<a
													href="#"
													className="ml-auto text-sm underline-offset-4 hover:underline"
												>
													Forgot your password?
												</a>
											</div>{" "}
											<FormControl>
												<Input
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" className="w-full">
									Login
								</Button>
								<div className="text-center text-sm">
									Don&apos;t have an account?{" "}
									<a
										href="#"
										className="underline underline-offset-4"
									>
										Sign up
									</a>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
