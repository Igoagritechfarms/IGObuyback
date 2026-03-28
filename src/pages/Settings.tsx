/**
 * Settings Page
 * Phase 0 Feature: User account and notification settings
 *
 * Includes:
 * - Email notification preferences
 * - Account settings
 * - Privacy settings
 * - Communication preferences
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Bell, Shield, Zap } from 'lucide-react';
import { EmailNotificationPreferences } from '../components/EmailNotificationPreferences';

type SettingsTab = 'account' | 'notifications' | 'privacy' | 'security';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('notifications');
  const userEmail = 'farmer@igobuyback.com'; // Replace with actual user email

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-white via-agri-earth-50 to-white pt-32 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-black text-agri-earth-900 mb-3">Settings</h1>
          <p className="text-lg text-agri-earth-600">Manage your account and preferences</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {([
            { id: 'account', label: 'Account', icon: User },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'privacy', label: 'Privacy', icon: Shield },
            { id: 'security', label: 'Security', icon: Lock }
          ] as const).map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-agri-green-600 text-white shadow-lg'
                  : 'bg-agri-earth-100 text-agri-earth-700 hover:bg-agri-earth-200'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Account Settings Tab */}
        {activeTab === 'account' && (
          <motion.div
            key="account"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-agri-earth-200 shadow-lg">
              <h2 className="text-2xl font-bold text-agri-earth-900 mb-6 flex items-center gap-2">
                <User className="text-agri-green-600" size={28} />
                Account Information
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-agri-earth-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Ramesh Kumar"
                    className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-agri-earth-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue={userEmail}
                    className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-agri-earth-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-agri-earth-900 mb-2">
                    Farm Location
                  </label>
                  <input
                    type="text"
                    defaultValue="Madurai, Tamil Nadu"
                    className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                  />
                </div>

                {/* Save Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-agri-green-600 text-white font-bold rounded-xl hover:bg-agri-green-700 transition-colors"
                >
                  Save Changes
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <EmailNotificationPreferences userEmail={userEmail} />
          </motion.div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <motion.div
            key="privacy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-agri-earth-200 shadow-lg">
              <h2 className="text-2xl font-bold text-agri-earth-900 mb-6 flex items-center gap-2">
                <Shield className="text-agri-green-600" size={28} />
                Privacy Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-agri-earth-50 rounded-xl border border-agri-earth-200">
                  <div>
                    <p className="font-semibold text-agri-earth-900">Profile Visibility</p>
                    <p className="text-sm text-agri-earth-600">Show your farm profile to buyers</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-agri-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agri-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-agri-earth-50 rounded-xl border border-agri-earth-200">
                  <div>
                    <p className="font-semibold text-agri-earth-900">Data Collection</p>
                    <p className="text-sm text-agri-earth-600">Allow analytics for improving service</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-agri-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agri-green-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-agri-earth-50 rounded-xl border border-agri-earth-200">
                  <div>
                    <p className="font-semibold text-agri-earth-900">Third-party Sharing</p>
                    <p className="text-sm text-agri-earth-600">Share data with partner services</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-agri-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agri-green-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-agri-earth-200 shadow-lg">
              <h2 className="text-2xl font-bold text-agri-earth-900 mb-6 flex items-center gap-2">
                <Lock className="text-agri-green-600" size={28} />
                Security Settings
              </h2>

              <div className="space-y-4">
                {/* Change Password */}
                <div>
                  <p className="font-semibold text-agri-earth-900 mb-4">Change Password</p>
                  <div className="space-y-3">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-3 border border-agri-earth-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-agri-green-500"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-agri-green-600 text-white font-bold rounded-xl hover:bg-agri-green-700 transition-colors"
                    >
                      Update Password
                    </motion.button>
                  </div>
                </div>

                {/* Two-Factor Auth */}
                <div className="mt-8 p-4 bg-agri-green-50 border border-agri-green-200 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-agri-green-900">Two-Factor Authentication</p>
                      <p className="text-sm text-agri-green-700">Add an extra layer of security</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-agri-green-600 text-white font-bold rounded-lg hover:bg-agri-green-700 transition-colors"
                    >
                      Enable 2FA
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
